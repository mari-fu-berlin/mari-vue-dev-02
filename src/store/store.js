import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    roomsWP: [],
    roomWP: {},
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
    getRoomsWP(state) {
      return state.roomsWP;
    },
    getRoomWP(state) {
      return state.roomWP;
    },
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
    setRoomsWP(state, payload) {
      store.state.roomsWP = payload;
    },
    changeRoomForDisplay(state, payload) {
      store.state.roomForDisplay = payload.n;
      store.state.roomWP = state.roomsWP[payload.index];
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
    loadRoomsWP(context) {
      axios.get('http://static.mari-intern.de/wp-json/wp/v2/raeume')
      .then((response) => {
        context.commit('setRoomsWP', response.data);
      })
      .catch(() => {

      });
    },
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
