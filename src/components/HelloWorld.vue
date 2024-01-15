<script setup>
import {useSzinhazStore} from "@/stores/színház.js";
import {ref} from "vue";
const SzinhazStore=useSzinhazStore()
const CurrentSzinhaz=ref(SzinhazStore.szinhaz['Vigszinhaz'])
</script>

<template>
<div></div>
</template>

