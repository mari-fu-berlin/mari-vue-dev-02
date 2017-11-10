import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    roomForDisplay: { name: 'Beispielraum' },
    planDim: {
      w: 1000,
      h: 1253,
    },
    rooms: [
      {
        name: 'Ecksaal',
        w: 278,
        h: 195,
        x: 714,
        y: 1015,
      },
      {
        name: 'Treppensaal',
        w: 132,
        h: 137,
        x: 853,
        y: 869,
      },
    ],
  },
  getters: {
    displayRoom(state) {
      return state.roomForDisplay.name;
    },
  },
  mutations: {
    changeRoomForDisplay(state, payload) {
      store.state.roomForDisplay.name = payload;
    },
  },
  actions: {
    changeRoomForDisplay(context, payload) {
      context.commit('changeRoomForDisplay', payload);
    },
  },
});

export default store;
