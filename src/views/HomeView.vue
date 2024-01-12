<script setup>
import {ref} from 'vue'
import { useSzinhazStore } from '@/stores/színház';
let szinhazStore = useSzinhazStore();
const mostSzinhaz = ref(szinhazStore.szinhaz['Vígszínház'])

</script>

<template>
  <h1>Hello!</h1>
  <div id="gombcontainer" v-for="szinhaz of szinhazStore.szinhaz" :key="szinhaz.name">
    <button @click="() => mostSzinhaz = szinhazStore.szinhaz[szinhaz.name]">{{ szinhaz.name }}</button>
  </div>
  <div id="info">
    <h3>{{ mostSzinhaz.name }}</h3>
    <h4>Előadások:</h4>
    <ul v-for="play of mostSzinhaz.eloadasok">
      <li>
        <div>{{ play.title }}</div>
        <a v-bind:href="play.url">A darab linkje</a>
      </li>
    </ul>
  </div>
</template>
