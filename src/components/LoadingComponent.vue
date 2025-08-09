<template>
  <loading v-model:active="pageLoading"
  :can-cancel="false"
  loader="bars"
  :z-index="99999" 
  color="green"
  :is-full-page="true"/>
</template>

<script lang="ts" setup>
 import { onMounted, ref } from 'vue';
 import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css';

const pageLoading = ref(true)
onMounted(() => {

})
</script>
<style lang="scss" scoped>

</style>