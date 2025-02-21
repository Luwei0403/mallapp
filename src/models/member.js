import userJSONData from '../data/users.json';

export default {
  namespace: 'member',
  state: {
    users: userJSONData,
    user: {},
    isLoggedIn: false, // default
  },
  effects: {
    *POST_login({payload, callback}, {select, put}) {
      const {username, password} = payload;
      const userData = yield select(state => state.member.users);
      let findUser = userData.find(user => user.username === username);

      if (!findUser) {
        if (callback) callback(404);
        return;
      }
      if (findUser.password !== password) {
        if (callback) callback(400);
        return;
      }

   
      yield put({
        type: 'SAVE_user',
        payload: {user: findUser},
      });

      yield put({
        type: 'saveLoginState',
        payload: {
          isLoggedIn: true,
          user: findUser,
        },
      });

      if (callback) callback(200);
    },

    *POST_user({payload, callback}, {put, select}) {
      const {username, password, email, name, password_check} = payload;
      let userData = yield select(state => state.member.users);

      let findUser = userData.find(user => user.username === username);

      if (findUser) {
        if (callback) callback(400); //user alerady exist
        return;
      }

      userData.push({
        id: userData.length + 1,
        username,
        password,
        password_check,
        email,
        name,
      });

      yield put({
        type: 'SAVE_users',
        payload: {users: userData},
      });

      if (callback) callback(200);
    },

    *PUT_user({payload, callback}, {put, select}) {
      const {username, name, email} = payload;
      let userData = yield select(state => state.member.users);

      let findUser = userData.find(user => user.username === username);

      if (!findUser) {
        if (callback) callback(404);
        return;
      }

      findUser.name = name; //update
      findUser.email = email;

      yield put({
        type: 'SAVE_users',
        payload: {users: userData},
      });

      yield put({
        type: 'SAVE_user',
        payload: {user: Object.assign({}, findUser)}, //deep copy
      });

      if (callback) callback(200);
    },

    *PUT_user_password({payload, callback}, {put, select}) {
      const {username, old_password, password, password_check} = payload;

      if (password !== password_check) {
        if (callback) callback(400);
        return;
      }

      let userData = yield select(state => state.member.users);
      let findUser = userData.find(user => user.username === username);

      if (!findUser) {
        if (callback) callback(404);
        return;
      }

      if (findUser.password !== old_password) {
        if (callback) callback(401); //Unauthorized
        return;
      }

      findUser.password = password;

      yield put({
        type: 'SAVE_users',
        payload: {users: userData},
      });

      yield put({
        type: 'SAVE_user',
        payload: {user: Object.assign({}, findUser)}, //update user password
      });

      if (callback) callback(200);
    },

    *LOGOUT_user({callback}, {put}) {
  
      yield put({
        type: 'SAVE_user',
        payload: {user: {}},
      });

      yield put({
        type: 'saveLoginState',
        payload: {
          isLoggedIn: false,
          user: null,
        },
      });

   
      yield put({
        type: 'cart/CLEAR_cart', 
      });

      if (callback) callback();
    },
  },
  reducers: {
    SAVE_user(state, {payload}) {
      return {
        ...state,
        user: payload.user,
      };
    },
    SAVE_users(state, {payload}) {
      return {
        ...state,
        users: payload.users,
      };
    },
    saveLoginState(state, {payload}) {
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        user: payload.user,
      };
    },
  },
};
