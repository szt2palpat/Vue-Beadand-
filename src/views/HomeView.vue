<script setup>
import {ref} from 'vue'
import { useSzinhazStore } from '@/stores/színház';
let szinhazStore = useSzinhazStore();
const mostSzinhaz = ref(szinhazStore.szinhaz['Vígszínház'])

</script>

<template>
  <div class="container mx-auto">
  <h1>Üdv!</h1>
  <div class="row" id="gombcontainer" v-for="szinhaz of szinhazStore.szinhaz" :key="szinhaz.name">
    <button id="gomb" @click="() => mostSzinhaz = szinhazStore.szinhaz[szinhaz.name]">{{ szinhaz.name }}</button>
  </div>
  <div id="info">
    <h3>{{ mostSzinhaz.name }}</h3>
    <h4>Előadások:</h4>

    <div class="card" v-for="play of mostSzinhaz.eloadasok">

        <div>{{ play.title }}</div>
        <a id="darab" v-bind:href="play.url">A darab linkje</a>

    </div>

  </div>
  </div>
</template>
<style>
.card *{

  text-align: center;
  vertical-align: middle;
  margin: auto;


}
body{
  background-color: lightblue;
}
#darab:visited,#darab:active,#darab:link {
  text-decoration: none !important;
  color:black !important;
}
#darab:hover,#darab:focus{
  text-decoration: underline !important;
}
#gomb{
  border-radius: 30px !important;
  background-color: white !important;
  margin-bottom: 10px;
  width: 200px;
  height:25px;
}
.container{
  text-align: center ;
}
.row *{
  margin:auto;
}
.card{
  height:100px;
  width: 200px;
margin:auto;
  margin-top:20px ;

}
</style>