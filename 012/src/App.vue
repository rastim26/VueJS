<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref('3')

    // const framework = reactive({
    //   name: 'VueJS',
    //   version: '3'
    // })

    const doubleVersion = computed(()=> {
      return version.value * 2
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 4

      // framework.name = 'Vue JS !'
      // framework.version = 4
    }

    return {
      name: name,
      version: version,
      change: changeInfo
    }
  }
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>