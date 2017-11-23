<template>
  <div class="page-content">
    <h1>{{ pageTitle }}</h1>
    <p>Hier steht der Text der 1. Unterseite</p>
  </div>
</template>

<script>
export default {
  name: 'Subpage-01',
  data () {
    return {
      pageTitle: '1. Unterseite'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
