<template>
  <v-app>
    <v-toolbar app v-if="getToolbarStat"> <v-btn color="primary" dark>Primary</v-btn></v-toolbar>
    <v-navigation-drawer id="mari-navigation" app permanent :width="getLayoutScheme.navDrawerWidth">
      <mari-navigation></mari-navigation>
    </v-navigation-drawer>
    <router-view id="mari-router-view" :style="getLayoutScheme.mainPaddingLeft"></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import mariNavigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'mari-navigation': mariNavigation,
  },
  computed: {
   // mix the getters into computed with object spread operator
    ...mapGetters([
      'getLayoutScheme',
      'getToolbarStat',
     // ...
    ]),
  },
  created() {
    this.$store.dispatch('setLayoutScheme', this.$store.state.layoutScheme01);
  },
};
</script>

<style>
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
