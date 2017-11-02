<template>
  <div>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex xs4 id="mari-navigation-col" v-if="navColExp">
          <div class="mari-logo">
            <img src="../assets/mari-logo.png" :alt="logoAlt" />
          </div><!-- .mari-logo -->
          <v-list dense class id="mari-nav">
            <v-list-tile v-for="navRoute in navRoutes" :key="navRoute.title" @click="mariGoTo(navRoute.path)">
              <v-list-tile-content>
                <v-list-tile-title><span class="list-tile-title">{{navRoute.label}}</span></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-icon dark @click="mariToggleNavCol()" style="cursor: pointer">chevron_left</v-icon>
          </v-list>
        </v-flex>
        <v-flex v-else xs1 id="mari-navigation-bar">
          <v-icon dark @click="mariToggleNavCol()" style="cursor: pointer">menu</v-icon>
        </v-flex>
        <v-flex v-bind:class="navColExp ? 'xs8' : 'xs11'" id="mari-content-listing">
          <content-listing></content-listing>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import contentListing from '@/components/Content-Listing';

export default {
  name: 'navi',
  components: {
    'content-listing': contentListing,
  },
  props: {
    navColExp: Boolean,
  },
    // mounted() {
  //   console.log(this.$vuetify.load);
  // },
  data() {
    return {
      // logoSrc: '../assets/mari-logo.png',
      logoAlt: 'Logo der Mosse Art Research Initiative',
      target: '',
      navRoutes: [
        {
          path: '/',
          name: 'Index',
          label: 'Domain',
        },
        {
          path: '/startseite',
          name: 'Home',
          label: 'Startseite',
        },
        {
          path: '/inhaltsseite-1',
          name: 'Content-01',
          label: 'Inhaltsseite 1',
          items: [
            {
              path: '/inhaltsseite-1/unterseite-1',
              name: 'Subpage-01',
              label: 'Unterseite 1',
            },
          ],
        },
      ],
    };
  },
  methods: {
    mariGoTo(target) {
      this.$router.push(target);
    },
    mariToggleNavCol() {
      this.$emit('layoutStateChanged', this.navColExp);
    },
  },
  created() {

  },
};
</script>

<style scoped>
#app {

}
#mari-navigation-col {
  background-color: transparent;
  padding-left: 1.5rem;
}
#mari-content-listing {
  background-color: lightgrey;
  height: 100vh;
}
.mari-logo {

}
.mari-logo img {
  display: block;
  max-width: 12rem;
  margin-left: 16px;
}
.list-tile-title {
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: .1rem;
}
</style>
