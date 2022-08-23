//引入Vue核心库
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";

import userInfo from '../assets/json/userInfo.json'
import mobilePage from '../assets/json/mobilePage.json'
import PCPage from '../assets/json/PCPage.json'
import other from '../assets/json/other.json'

//应用Vuex插件
Vue.use(Vuex);

//准备actions对象——响应组件中用户的动作
const actions = {};
//准备mutations对象——修改state中的数据
const mutations = {};
//准备state对象——保存具体的数据
const state = {
  userInfo, //个人信息
  mobilePage, //手机端项目
  PCPage, //PC端项目,
  other //其它信息
};
//准备getters——加工state里的数据
const getters = {};

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
