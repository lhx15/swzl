/**
 * state:
 *   name:用户姓名
 *   login:用户是否登录
 *   permission:用户权限,在项目中暂时没有体现，但是留有余地
 */

const state = {
  name: '',
  login: false,
  power:0,
  tel:null,
  wechat:'',
  id:0,
};

const mutations = {
  /**
   * [setLogin 设置登录状态]
   * @param {[bool]} bool  [设置登录或者未登录]
   */
  setLogin(state, bool) {
    state.login = Boolean(bool);
  },
   /**
   * [setLogin 设置用户信息]
   * @param {[object]} userObj  [用户对象]
   */
  setUser(state, userObj) {
    if (typeof userObj === 'object') {
      if (userObj.hasOwnProperty('name')) {
        state.name = userObj.name;
      }
      if (userObj.hasOwnProperty('power')) {
        state.power = userObj.power;
      }
      if (userObj.hasOwnProperty('tel')) {
        state.tel = userObj.tel;
      }
      if (userObj.hasOwnProperty('wechat')) {
        state.wechat = userObj.wechat;
      }
      if (userObj.hasOwnProperty('id')) {
        state.id = userObj.id;
      }
      state.login = true;
    }
  }
};
const actions = {

  setLogin(context, bool) //context指的是当前对象
  {
    context.commit('setLogin', bool); //commit是寻找mutations的方法
  },
  setUser(context, userObj) {
    // console.log(context)
    context.commit('setUser', userObj);
  }
};


export default {
  state,
  mutations,
  actions
}
