export default {
  namespace: 'cart',
  state: {
    cart: [],
    cart_personal: [],
  },
  effects: {
    *GET_cart({loading}, {select, put}) {
      if (loading) loading(true);

      const productData = yield select(state => state.product.product);
      const cartData = yield select(state => state.cart.cart);
      const userData = yield select(state => state.member.user);

   
      if (!userData || !userData.id) {
        yield put({
          type: 'SAVE_cart_personal',
          payload: {cart_personal: []}, //clear
        });
        if (loading) loading(false);
        return;
      }

      const result = [];
      cartData.forEach(item => {
        if (item.user_id === userData.id) {
          const matchedProduct = productData.find(
            product => product.id === item.product_id,
          );
          if (matchedProduct) {
            result.push({
              ...item,
              ...matchedProduct, //product's name, price, id
            });
          }
        }
      });

      yield put({
        type: 'SAVE_cart_personal',
        payload: {cart_personal: result},
      });

      if (loading) loading(false);
    },

    *POST_cart({payload, callback}, {put, select}) {
      if (payload.count <= 0) return;
      let cartData = yield select(state => state.cart.cart);
      const userData = yield select(state => state.member.user);

      let cartItemIndex = cartData.findIndex(
        item =>
          item.user_id === userData.id &&
          item.product_id === payload.product_id,
      );

      if (cartItemIndex === -1) {
        cartData.push({
          ...payload,
          user_id: userData.id,
        });
      } else {
        cartData[cartItemIndex].count = payload.count; 
      }

      yield put({
        type: 'SAVE_cart',
        payload: {cart: cartData},
      });

      yield put({type: 'GET_cart'}); //Cart changed, update GET_cart

      if (callback) callback();
    },

    *DELETE_cart({payload}, {put, select}) {
      let cartData = yield select(state => state.cart.cart);
      cartData = cartData.filter(item => item.product_id !== payload); 

      yield put({
        type: 'SAVE_cart',
        payload: {cart: cartData},
      });

      yield put({type: 'GET_cart'}); //Cart changed, update GET_cart
    },

    *CLEAR_cart(_, {put}) {
  
      yield put({
        type: 'SAVE_cart',
        payload: {cart: []}, // all clear
      });
      yield put({
        type: 'SAVE_cart_personal',
        payload: {cart_personal: []}, // cart_personal clear
      });
    },
  },
  reducers: {
    SAVE_cart(state, {payload}) {
      return {
        ...state,
        cart: payload.cart,
      };
    },
    SAVE_cart_personal(state, {payload}) {
      return {
        ...state,
        cart_personal: payload.cart_personal,
      };
    },
    CLEAR_cart(state) {
      //if user logout
      return {
        ...state,
        cart: [],
        cart_personal: [],
      };
    },
  },
};
