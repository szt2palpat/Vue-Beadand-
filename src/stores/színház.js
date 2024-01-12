import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useSzinhazStore = defineStore('szinhaz', () => {
  const szinhaz = ref({
    'Vígszínház': {
      name: 'Vígszínház',
      eloadasok: [
        {
          title: 'A Dzsungel Könyve',
          url: 'https://www.jegy.hu/program/a-dzsungel-konyve-81963'
        },
        {
          title: 'Barátom, Harvey',
          url: 'https://www.jegy.hu/program/baratom-harvey-131921'
        },
        {
          title: "Béranyák",
          url: "https://www.jegy.hu/program/beranyak-139745"
        }
      ]
    },
    "Centrál Színház": {
      name: "Centrál Színház",
      eloadasok: [
        {
          title: "Ma este felnövünk",
          url: "https://www.centralszinhaz.hu/eloadasok/ma_este_felnovunk"
        },
        {
          title: "Házassági leckék középhaladóknak",
          url: "https://www.centralszinhaz.hu/eloadasok/hazassagi_leckek_kozephaladoknak"
        }
      ]
    },
    "Thália Színház": {
      name: "Thália Színház",
      eloadasok: [
        {
          title: "Legszebb férfikor",
          url: "https://thalia.hu/eloadasok/legszebb-ferfikor/"
        },
        {
          title: "Bolha a fülbe",
          url: "https://thalia.hu/eloadasok/bolha-a-fulbe/"
        },
        {
          title: "Rettenetes szülők",
          url: "https://thalia.hu/eloadasok/jean-cocteau-rettenetes-szulok/"
        },
        {
          title: "A nagy kézrablás",
          url: "https://thalia.hu/eloadasok/a-nagy-kezrablas-2/"
        }
      ]
    }

})
  return { szinhaz }
})
