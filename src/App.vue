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
    const config = {
      navigationDrawerWidth: {
        default: 500,
        colexp: 720,
        navbar: 500,
      },
    };
    return {
      toolbar: false,
      layoutState: {
        navColExp: false,
        navigationDrawerWidth: config.navigationDrawerWidth.default,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.default + 'px',
      },
      layoutSchemeNavColExp: {
        navColExp: true,
        navigationDrawerWidth: config.navigationDrawerWidth.colexp,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.colexp + 'px',
      },
      layoutSchemeNavBar: {
        navColExp: false,
        navigationDrawerWidth: config.navigationDrawerWidth.navbar,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.navbar + 'px',
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
