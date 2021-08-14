<template>
  <div class="card">
    <hr>
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

    <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>
  </div>
</template>
<script>
import {computed, inject} from "vue";

export default {
  name: 'frameworkInfo',
  props: ['name', 'version'],
  emits: ['change-version'],
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2
  //   }
  // }


  setup(props, context) {

    function change() {
      context.emit('changeVersion',3)
    }


    const version = inject('version')

    return {
      // name: inject('name'),
      // version: version,
      changeToThree: change,
      doubleVersion: computed(() => (version.value * 2))
    }
  }
}
</script>