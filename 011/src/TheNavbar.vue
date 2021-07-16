<template>
  <header class="navbar">
    <strong>Счетчик: {{ counter }}</strong>
    <button class="btn" @click="add">Добавить</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter
    // }
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapMutations({
      addFive: 'add'
    }),
    // add() {
    //   this.$store.commit('add', {
    //     value: 5
    //   })
    // }
    add() {
      this.addFive({value: 5})
    }
    // addFive() {
    //   this.add({value:5})
    //   // this.$store.commit({
    //   //   type: 'add',
    //   //   value: 5
    //   // })
    // }
  }
}
</script>
