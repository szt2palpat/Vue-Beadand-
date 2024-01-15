<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <div class="nav navbar text-black ">
        <RouterLink class="nav nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav nav-link"  to="/about">About</RouterLink>
      </div>
  <RouterView />
</template>

<style>
.navbar{
  width: 10%;

}
.nav-link{
color: black;
}
</style>