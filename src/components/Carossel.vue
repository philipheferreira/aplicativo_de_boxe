<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated infinite
          autoplay="80000" control-color="white" navigation padding arrows height="500px"
          class="bg-primary text-white shadow-1 rounded-borders">
          <q-carousel-slide name="style" class="column no-wrap flex-center" :img-src="imgCarossel1">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
              {{ texto1 }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center" :img-src="imgCarossel2">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
              {{ texto2 }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center" :img-src="imgCarossel3">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
              {{ texto3 }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center" :img-src="imgCarossel4">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
              {{ texto4 }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'carosselInfo',
  setup() {
    return {
      slide: ref('style'),
      imgCarossel1: "https://gooutside.com.br/wp-content/uploads/sites/4/2018/03/shutterstock_222253792.jpg",
      imgCarossel2: "https://www.lance.com.br/melhorpreco/wp-content/uploads/2022/09/melhor-saco-de-pancada.jpg",
      imgCarossel3: "https://stockadetraining.com.au/wp-content/uploads/2020/10/amateur-sparring-1.jpg",
      imgCarossel4: "https://cdn.quasar.dev/img/quasar.jpg",
      texto1: "Independente de treinar boxe todos os dias é sempre bom correr e fazer abdominais para manter o corpo ativo",
      texto2: "Quando for aplicar golpes no saco de area o ideal é manter os punhos firmes e fechados, um soco relaxado corre o risco de machucar, torcer ou fraturar a mão",
      texto3: "Para aqueles que estão iniciando no boxe sparring programados são sempre mais produtivos do que sparring que simulam lutas",
      texto4: "Textando o 4 texto"
    }
  }
}
</script>

<style></style>
