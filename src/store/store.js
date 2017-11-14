import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    roomForDisplay: { },
  },
  getters: {
    displayRoom(state) {
      return state.roomForDisplay;
    },
  },
  mutations: {
    changeRoomForDisplay(state, payload) {
      store.state.roomForDisplay = payload;
    },
  },
  actions: {
    changeRoomForDisplay(context, payload) {
      context.commit('changeRoomForDisplay', payload);
    },
  },
});

export default store;
