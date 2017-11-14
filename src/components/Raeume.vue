<template>
  <div class="bg-grey">
    <v-container grid-list-md>
      <v-layout row wrap>
          <v-flex xs8>
            <h2>Raumplan</h2>
            <div id="plans-container" ref="plansContainer">
              <img :src="planSrc" ref="plan"/>
              <a
                href="#" v-for=" (room, index) in rooms"
                @click.prevent="getRoom(room)"
                v-bind:id="room.name"
                class="room-trigger"
                v-bind:style="positionRoom(index)">
            </a>
            </div>
          </v-flex>
          <v-flex xs4>
            <div>
              <h4>{{ displayRoom.name }}</h4>
              <p>{{ displayRoom.sigle }}</p>
            </div>
          </v-flex>
      </v-layout>
    </v-container>
  </div><!--  -->
</template>

<script>
import { mapGetters } from 'vuex';
import Rooms from '../mixins/roomsData';

export default {
  mixins: [Rooms],
  name: 'Plans',
  data() {
    return {
      devOutput: '',
    };
  },
  methods: {
    positionRoom(i) {
      const room = this.rooms[i];
      room.wRel = (room.w / this.planDim.w) * 100;
      room.hRel = (room.h / this.planDim.h) * 100;
      room.xRel = (room.x / this.planDim.w) * 100;
      room.yRel = (room.y / this.planDim.h) * 100;
      let styleText = '';
      styleText += ' width: ' + room.wRel + '%;';
      styleText += ' height: ' + room.hRel + '%; ';
      styleText += ' left: ' + room.xRel + '%;';
      styleText += ' top: ' + room.yRel + '%;';
      return styleText;
    },
    getRoom(n) {
      // this.$store.state.roomForDisplay.name = n.name;
      const r = n;
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
    background: rgba(0,0,0,.0);
  }
</style>
