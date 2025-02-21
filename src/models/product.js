import productJSONData from '../data/product.json';

export default {
  namespace: 'product',
  state: {
    product_type: productJSONData.product_type,
    product: productJSONData.product,
    product_detail: [],
    new_product: [],
  },
  effects: {
    *GET_product_detail({payload, loading}, {put, select}) {
      let productData = yield select(state => state.product.product);
      const result = productData.filter(item => item.type_id === payload.id);

      yield put({
        type: 'SAVE_product_detail',
        payload: {
          productData: result,
        },
      });
      if (loading) loading(false);
    },
    *GET_new_product({loading}, {put, select}) {
      if (loading) loading(true);
      let productData = yield select(state => state.product.product);
      productData = productData.sort((a, b) => {
        return new Date(b.create_time) - new Date(a.create_time); //new date - old date 
      });
   
      productData = productData.slice(0, 5);
      yield put({
        type: 'SAVE_new_product',
        payload: {
          productData,
        },
      });

      if (loading) loading(false);
    },
  },
  reducers: {
    SAVE_product_detail(state, {payload}) {
      return {
        ...state,
        product_detail: payload.productData,
      };
    },
    SAVE_new_product(state, {payload}) {
      return {
        ...state,
        new_product: payload.productData,
      };
    },
  },
};
