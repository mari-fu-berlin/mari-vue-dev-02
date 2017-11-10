<template>
  <div class="page-content">
    <div id="plans-container">
      <p>Pläne</p>
      <img src="./static/Plan-1.svg" ref="plan"/>
      <a href="#" v-for=" (room, index) in rooms" @click.prevent="getRoom(room.name)" v-bind:id="room.name" class="room-trigger" v-bind:style="positionRoom(index)"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plans',
  data () {
    return {
      planSrc: '../assets/Plan-1.svg',
      planDim: {
        w: 1000,
        h: 1253
      },
      rooms: [
        {
          name: 'Ecksaal',
          w: 278,
          h: 195,
          x: 714,
          y: 1015
        },
        {
          name: 'Treppensaal',
          w: 132,
          h: 137,
          x: 853,
          y: 869
        }
      ]
    }
  },
  methods: {
    rScale: function (v) {
      var wPlan = 600
      var wNative = 1000
      var scaleFactor = wPlan / wNative
      return v * scaleFactor
    },
    positionRoom: function (i) {
      var room = this.rooms[i]
      var styleText = ''
      styleText += ' width: ' + this.rScale(room.w) + 'px; '
      styleText += ' height: ' + this.rScale(room.h) + 'px; '
      styleText += ' left: ' + this.rScale(room.x) + 'px; '
      styleText += ' top: ' + this.rScale(room.y) + 'px; '
      return styleText
    },
    showRoom: function (event) {

    },
    getRoom: function (n) {
      console.log(n)
    }
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
    background: rgba(0,0,0,.2);
  }
</style>
