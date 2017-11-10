<template>
  <div class="bg-grey">
    <v-container grid-list-md>
      <v-layout row wrap>
          <v-flex xs8>
            <h2>Raumplan</h2>
            <div id="plans-container" ref="plansContainer">
              <img :src="planSrc" ref="plan"/>
              <a href="#" v-for=" (room, index) in rooms" @click.prevent="getRoom(room)" v-bind:id="room.name" class="room-trigger" v-bind:style="positionRoom(index)"></a>
            </div>
          </v-flex>
          <v-flex xs4>
            <h3>Raumdetails</h3>
            <div>aktueller Raum {{ displayRoom }}</div>
          </v-flex>
      </v-layout>
    </v-container>
  </div><!--  -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Plans',
  data() {
    return {
      devOutput: '',
      planSrc: '../static/Plan-1.svg',
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
    };
  },
  methods: {
    positionRoom(i) {
      const room = this.rooms[i];
      const scaleFactor = 1.0;
      room.wRel = (room.w / this.planDim.w) * 100 * scaleFactor;
      room.hRel = (room.h / this.planDim.h) * 100 * scaleFactor;
      room.xRel = (room.x / this.planDim.w) * 100 * scaleFactor;
      room.yRel = (room.y / this.planDim.h) * 100 * scaleFactor;
      let styleText = '';
      styleText += ' width: ' + room.wRel + '%;';
      styleText += ' height: ' + room.hRel + '%; ';
      styleText += ' left: ' + room.xRel + '%;';
      styleText += ' top: ' + room.yRel + '%;';
      styleText += 'background: red';
      return styleText;
    },
    getRoom(n) {
      // this.$store.state.roomForDisplay.name = n.name;
      const r = n.name;
      this.$store.dispatch('changeRoomForDisplay', r);
    },
  },
  computed: {
   // mix the getters into computed with object spread operator
    ...mapGetters([
      'displayRoom',
     // ...
    ]),
  },
};
</script>

<style scoped>
  #plans-container {
    position: relative;
    margin: 20px;
    max-width: 600px;
  }
  #plans-container img {
    max-width: 100%;
    display: block;
  }
  .room-trigger {
    display: block;
    position: absolute;
    background: rgba(0,0,0,.2);
  }
</style>
