<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>
<template>
    <Header />
    <main class="h-screen flex flex-col mt-20 sm:mt-0"> 
      <RouterView />
      <vragen />
      <Footer />
    </main>
</template>