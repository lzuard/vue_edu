<template>
  <navbar></navbar>
  <div  class="app">
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .app{
    margin: 15px;
  }
</style>