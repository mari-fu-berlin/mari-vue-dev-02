<template>
  <div class="bg-grey page-content">
    <v-container grid-list-md>
      <v-layout row wrap>
          <v-flex xs8>
            <h2>Raumplan</h2>
            <div id="plans-container" ref="plansContainer">
              <img :src="planSrc" ref="plan"/>
              <a
                href="#" v-for=" (room, index) in getRooms"
                @click.prevent="getRoom(room, index)"
                v-bind:id="room.name"
                class="room-trigger"
                v-bind:style="positionRoom(index)">
            </a>
            </div>
          </v-flex>
          <v-flex xs4>
            <div>
              <h4>{{ displayRoom.raum_name }}</h4>
              <p>{{ displayRoom.sigle }}</p>
              <p>Log: {{ devOutput }} </p>
              <p>Aktueller Raum: {{ getRoomWP.raum_name }}</p>
              <pre>{{ getRoomWP }}</pre>
              <hr />
              <pre>{{ getRooms }}</pre>
            </div>
          </v-flex>
      </v-layout>
    </v-container>
  </div><!--  -->
</template>

<script>
import { mapGetters } from 'vuex'
import Rooms from '../mixins/roomsData'

export default {
  mixins: [Rooms],
  name: 'Plans',
  data () {
    return {
      devOutput: 'leer'
    }
  },
  methods: {
    positionRoom (i) {
      const room = this.getRooms[i]
      const referenzPlan = this.getRooms[i].referenzplan[0]
      const w = (room.breite / referenzPlan.plan_messbreite) * 100
      const h = (room.hoehe / referenzPlan.plan_messhoehe) * 100
      const x = (room.position_x / referenzPlan.plan_messbreite) * 100
      const y = (room.position_y / referenzPlan.plan_messhoehe) * 100
      let styleText = ''
      styleText += ' width: ' + w + '%'
      styleText += ' height: ' + h + '% '
      styleText += ' left: ' + x + '%'
      styleText += ' top: ' + y + '%'
      return styleText
    },
    getRoom (n, index) {
      // this.$store.state.roomForDisplay.name = n.name
      const payload = { n, index }
      this.$store.dispatch('changeRoomForDisplay', payload)
    }
  },
  computed: {
   // mix the getters into computed with object spread operator
    ...mapGetters([
      'displayRoom',
      'getRooms',
      'getRoomWP'
     // ...
    ])
  },
  created () {
    this.$store.dispatch('setLayoutScheme', this.$store.state.layoutScheme00)
    this.$store.dispatch('loadRoomsWP')
    this.devOutput = 'created'
  }
}
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
  background: rgba(255,0,0,.2);
}
</style>
