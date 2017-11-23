<template>
  <div>
    <div class="mari-card">
      <div class="mari-card-title">
        <h2 class="rubrik">Einleitung</h2>
        <h3 class="">Rudolf Mosse und seine Familie</h3>
      </div><!-- .mari-card-title -->
      <div class="mari-card-content">
        <p>Der deutsch-jüdische Verleger Rudolf Mosse gehörte zu den einflussreichsten ...</p>
      </div><!-- .mari-card-content -->
      <div class="mari-card-action">
        <v-btn flat>Listen now</v-btn>
      </div><!-- .mari-card-action -->
    </div><!-- .mari-card -->
    <div class="mari-card">
      <div class="mari-card-title">
        <h2 class="rubrik">Einleitung</h2>
        <h3 class="">Rudolf Mosse und seine Familie</h3>
      </div><!-- .mari-card-title -->
      <div class="mari-card-content">
        <p>Der deutsch-jüdische Verleger Rudolf Mosse gehörte zu den einflussreichsten ...</p>
      </div><!-- .mari-card-content -->
      <div class="mari-card-action">
        <v-btn flat>Listen now</v-btn>
      </div><!-- .mari-card-action -->
    </div><!-- .mari-card -->
  </div><!--  -->
</template>

<script>
export default {
  name: 'Content-01',
  data () {
    return {
      pageTitle: '1. Inhaltsseite'
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
h2 {
  font-size: 1.2rem;
}
h3 {
  font-size: 1.4rem;
}
.mari-card {
  background: #fff;
  margin: .5rem;
  padding: 1rem;
}
</style>
