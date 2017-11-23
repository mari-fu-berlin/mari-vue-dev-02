import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rooms: [],
    room: {},
    roomForDisplay: { },
    layoutScheme: {
      navColExp: false,
      navDrawerWidth: 500,
      mainPaddingLeft: 'padding-left: 500px',
      toolbar: false
    },
    layoutScheme00: {
      navColExp: false,
      navDrawerWidth: 500,
      mainPaddingLeft: 'padding-left: 500px',
      toolbar: false
    },
    layoutScheme01: {
      navColExp: true,
      navDrawerWidth: 720,
      mainPaddingLeft: 'padding-left: 720px',
      toolbar: false
    },
    toolbar: false
  },
  getters: {
    getRooms: state => state.rooms,
    getRoomWP: state => state.room,
    displayRoom: state => state.roomForDisplay,
    getNavColState: state => state.layoutScheme.navColExp,
    getLayoutScheme: state => state.layoutScheme,
    getToolbarStat: state => state.layoutScheme.toolbar
  },
  mutations: {
    setRoomsWP: (state, payload) => {
      state.rooms = payload
    },
    changeRoomForDisplay: (state, payload) => {
      state.roomForDisplay = payload.n
      state.room = state.rooms[payload.index]
    },
    toggleNavCol: (state) => {
      state.navColExp = !state.navColExp
    },
    changeNavState: (state) => {
      state.layoutScheme = (state.layoutScheme === state.layoutScheme01)
        ? state.layoutScheme00 : state.layoutScheme01
    },
    setLayoutScheme: (state, payload) => {
      state.layoutScheme = payload
    }
  },
  actions: {
    loadRoomsWP (context) {
      axios.get('http://static.mari-intern.de/wp-json/wp/v2/raeume')
      .then((response) => {
        context.commit('setRoomsWP', response.data)
      })
      .catch(() => {

      })
    },
    changeRoomForDisplay (context, payload) {
      context.commit('changeRoomForDisplay', payload)
    },
    toggleNavCol (context) {
      context.commit('toggleNavCol')
    },
    changeNavState (context) {
      context.commit('changeNavState')
    },
    setLayoutScheme (context, payload) {
      context.commit('setLayoutScheme', payload)
    }
  }
})

export default store
