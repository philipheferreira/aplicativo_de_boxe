<template>
  <q-page>
    <div>
      <carossel></carossel>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import carossel from 'components/Carossel.vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    carossel
  }
})
</script>
