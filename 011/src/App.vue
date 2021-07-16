<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик: {{ counter }} * 2 = {{ doubleCounter }}</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations,mapActions } from 'vuex'
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  // data () {
  //   return {
  //     counter: 0
  //   }
  // },
  computed: mapGetters(['counter', 'doubleCounter']),
  methods: {
    ...mapMutations({add: 'increment'}),
    // add() {
    //   this.$store.commit('increment')
    // },
    ...mapActions(['incrementAsync'])
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync',{
    //     value: 10,
    //     delay: 200
    //   })
    // }
  }
}
</script>
