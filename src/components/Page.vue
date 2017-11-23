<template>
  <div class="bg-grey page-content">
    <p>Seiteninhalt von {{ page.id }}</p>
    <p>Checker: {{ devOutput }}</p>
    <article>
      <h2 v-if="page.title && page.title.rendered" v-html="page.title.rendered" class="page-title"></h2>
      <div class="article-content" v-if="page.content && page.content.rendered" v-html="page.content.rendered"></div>
      <ul v-if="errors && errors.length">
          <li v-for="error of errors">
            {{ error.message }}
          </li>
      </ul>
    </article>
  </div><!--  -->
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  mixins: [],
  name: 'Page',
  data () {
    return {
      page: {},
      errors: [],
      devOutput: ''
    }
  },
  methods: {
    getPage () {
      const id = 92
      this.checker = 'getPage aufgerufen'
      if (id && id > 0) {
        axios.get('http://inhalte.mari-intern.de/wp-json/wp/v2/pages/' + id)
        .then((response) => {
          this.page = response.data
        })
        .catch((e) => {
          this.errors.push(e)
        })
      }
    },
    computed: {
      ...mapGetters([
        'displayRoom'
       // ...
      ])
    }
  },
  created () {
    this.$store.dispatch('setLayoutScheme', this.$store.state.layoutScheme00)
    this.getPage()
  }
}
</script>

<style scoped>

</style>
