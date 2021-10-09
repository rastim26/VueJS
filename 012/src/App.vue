<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <framework-info
        :name="name"
        :version="version"
        @change-version="changeVersion"
        class="test-from-app"
      >
        <template #footer>
          <p>This is footer</p>
        </template> //qwerttty
      </framework-info>

      <div class="form-control">
        <input type="text" v-model="firstName">
      </div> //qwertty

      <button class="btn" @click="change">Изменить</button>

    </div>
  </div>
</template>

<script>
import {
  ref,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted

} from 'vue'
import FrameworkInfo from "./FrameworkInfo";

export default {
  components: {FrameworkInfo},
  setup() {
    const name = ref('VueJS')
    const version = ref('3')
    // const textInput = ref(null)
    const firstName = ref('')
    // const framework = reactive({
    //   name: 'VueJS',
    //   version: '3'
    // })

    onBeforeMount(
        console.log('onBeforeMount')
    )
    onMounted(
        console.log('onMounted')
    )
    onBeforeUpdate(
        console.log('onBeforeUpdate')
    )
    onUpdated(
        console.log('onUpdated')
    )
    onBeforeUnmount(
        console.log('onBeforeUnmount')
    )


    watch(firstName,(newV) => {
      console.log(newV)
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 4

      // framework.name = 'Vue JS !'
      // framework.version = 4

    }

    function changeVersion(num) {
      version.value = num
    }
    provide('name', name)
    provide('version', version)
    return {
      change: changeInfo,
      firstName,
      changeVersion: changeVersion
    }
  }
}
</script>