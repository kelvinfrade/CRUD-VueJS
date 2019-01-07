<template>
  <div class="home">
   <img src="../assets/logo.png">
    <helloworld msg="Bem-vindo ao CRUD VueJS + Django"/>
  </div>
</template>

<script>

import Helloworld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Helloworld
  }
}
</script>

