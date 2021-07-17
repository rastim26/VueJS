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
    ...mapGetters('count', ['counter'])
  },
  methods: {
    ...mapMutations({
      addFive: 'count/add'
    }),
    add() {
      this.addFive({value: 5})
    }
  }
}
</script>
