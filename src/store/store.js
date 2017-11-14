import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    roomForDisplay: { },
    layoutScheme: {
      navColExp: false,
      navDrawerWidth: 500,
      mainPaddingLeft: 'padding-left: 500px',
      toolbar: false,
    },
    layoutScheme00: {
      navColExp: false,
      navDrawerWidth: 500,
      mainPaddingLeft: 'padding-left: 500px',
      toolbar: false,
    },
    layoutScheme01: {
      navColExp: true,
      navDrawerWidth: 720,
      mainPaddingLeft: 'padding-left: 720px',
      toolbar: false,
    },
    toolbar: false,
  },
  getters: {
    displayRoom(state) {
      return state.roomForDisplay;
    },
    getNavColState(state) {
      return state.layoutScheme.navColExp;
    },
    getLayoutScheme(state) {
      return state.layoutScheme;
    },
    getToolbarStat(state) {
      return state.layoutScheme.toolbar;
    },
  },
  mutations: {
    changeRoomForDisplay(state, payload) {
      store.state.roomForDisplay = payload;
    },
    toggleNavCol(state) {
      store.state.navColExp = !state.navColExp;
    },
    changeNavState(state) {
      if (store.state.layoutScheme === state.layoutScheme01) {
        store.state.layoutScheme = state.layoutScheme00;
      } else {
        store.state.layoutScheme = state.layoutScheme01;
      }
    },
    setLayoutScheme(state, payload) {
      store.state.layoutScheme = payload;
    },
  },
  actions: {
    changeRoomForDisplay(context, payload) {
      context.commit('changeRoomForDisplay', payload);
    },
    toggleNavCol(context) {
      context.commit('toggleNavCol');
    },
    changeNavState(context) {
      context.commit('changeNavState');
    },
    setLayoutScheme(context, payload) {
      context.commit('setLayoutScheme', payload);
    },
  },
});

export default store;
