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
import Layout from './mixins/Layout';

export default {
  name: 'app',
  mixins: [Layout],
  components: {
    'mari-navigation': mariNavigation,
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

<style>
#app {

}
#mari-router-view {
  max-width: 1280px;
}
#mari-navigation {
  background-color: #6c07ff;;
  overflow: hidden;
}
.container.grid-list-xs {
  padding: 0;
}
</style>
