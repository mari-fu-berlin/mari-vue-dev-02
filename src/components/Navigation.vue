<template>
  <div>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex xs4 id="mari-navigation-col" v-if="getNavColState">
          <div class="mari-logo">
            <img src="../assets/mari-logo.png" :alt="logoAlt" />
          </div><!-- .mari-logo -->
          <div id="mari-navi">
            <ul class="mari-navi">
              <router-link tag="li" :to="{ name: 'Startseite', params: {} }"><a>Startseite</a></router-link>
              <router-link tag="li" :to="{ name: 'Content-01', params: {} }"><a>Inhaltsseite</a></router-link>
              <router-link tag="li" :to="{ name: 'Raeume', params: {} }"><a>Räume</a></router-link>
              <router-link tag="li" :to="{ name: 'Page', params: {} }"><a>Seite</a></router-link>
            </ul>
            <v-icon dark @click="mariToggleNavCol()" style="cursor: pointer">chevron_left</v-icon>
          </div><!--- #mari-navi -->
        </v-flex>
        <v-flex v-else xs1 id="mari-navigation-bar">
          <v-icon dark @click="mariToggleNavCol()" style="cursor: pointer">menu</v-icon>
        </v-flex>
        <v-flex v-bind:class="getNavColState ? 'xs8' : 'xs11'" id="mari-content-listing">
          <content-listing></content-listing>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import contentListing from '@/components/Content-Listing'
import { mapGetters } from 'vuex'

export default {
  name: 'navi',
  components: {
    'content-listing': contentListing
  },
  data () {
    return {
      logoAlt: 'Logo der Mosse Art Research Initiative',
      target: '',
      navRoutes: [
        {
          path: '/',
          name: 'Index',
          label: 'Domain'
        },
        {
          path: '/startseite',
          name: 'Home',
          label: 'Startseite'
        },
        {
          path: '/plans',
          name: 'Plans',
          label: 'Räume'
        },
        {
          path: '/inhaltsseite-1',
          name: 'Content-01',
          label: 'Inhaltsseite 1',
          items: [
            {
              path: '/inhaltsseite-1/unterseite-1',
              name: 'Subpage-01',
              label: 'Unterseite 1'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getNavColState'
    ])
  },
  methods: {
    mariGoTo (target) {
      this.$router.push(target)
    },
    mariToggleNavCol () {
      this.$store.dispatch('changeNavState')
    }
  },
  created () { }
}
</script>

<style scoped>
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
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#mari-navi {
  margin-top: 4rem;
}
#mari-navi a,
#mari-navi a:link,
#mari-navi a:visited,
#mari-navi a:hover,
#mari-navi a:focus {
color: #fff;
text-transform: uppercase;
text-decoration: none;
font-size: 1.25rem;
letter-spacing: .1rem;
}
</style>
