<template>
  <v-app>
    <v-toolbar app v-if="toolbar"> <v-btn color="primary" dark>Primary</v-btn></v-toolbar>
    <v-navigation-drawer id="mari-navigation" app permanent :width="layoutState.navigationDrawerWidth">
      <mari-navigation :navColExp="layoutState.navColExp" @layoutStateChanged='changeLayoutState($event)'></mari-navigation>
    </v-navigation-drawer>
    <router-view id="mari-router-view" :style="layoutState.mainPaddingLeft"></router-view>
  </v-app>
</template>

<script>
import mariNavigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'mari-navigation': mariNavigation,
  },
  data() {
    return {
      toolbar: false,
      pWidth: 500,
      layoutState: {
        navColExp: false,
        navigationDrawerWidth: 500,
        mainPaddingLeft: 'padding-left: 500px',
      },
      layoutSchemeNavColExp: {
        navColExp: true,
        navigationDrawerWidth: 720,
        mainPaddingLeft: 'padding-left: 720px',
      },
      layoutSchemeNavBar: {
        navColExp: false,
        navigationDrawerWidth: 500,
        mainPaddingLeft: 'padding-left: 500px',
      },
    };
  },
  computed: {

  },
  methods: {
    getPadding() {

    },
    changeLayoutState(layoutStateProp) {
      if (layoutStateProp === false) {
        this.layoutState = this.layoutSchemeNavColExp;
      } else {
        this.layoutState = this.layoutSchemeNavBar;
      }
    },
  },
};
</script>

<style scoped>
#app {

}
#mari-router-view {
  max-width: 1280px;
}
#mari-navigation {
  background-color: #6c07ff;;
  overflow: hidden;}
</style>
