<template>
  <q-page class="column">
    <div class="q-pa-md justify-center">
      <div class="info text-center">Informacoes sobre golpes</div>
    </div>
    <div class="flex row">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img :src="imagemJab" />

          <q-card-section>
            <div class="text-h6">Jab</div>
            <div class="text-subtitle2">Dificuldade do movimento</div>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars[0]"
                :max="3"
                color="primary"
              />
              <span class="text-caption text-grey q-ml-sm">Facil</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img :src="imagemDireto" />

          <q-card-section>
            <div class="text-h6">Direto</div>
            <div class="text-subtitle2">Dificuldade do movimento</div>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars[0]"
                :max="3"
                color="primary"
              />
              <span class="text-caption text-grey q-ml-sm">Facil</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img :src="imagemHook" />

          <q-card-section>
            <div class="text-h6">Hook</div>
            <div class="text-subtitle2">Dificuldade do movimento</div>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars[1]"
                :max="3"
                color="primary"
              />
              <span class="text-caption text-grey q-ml-sm">Mediano</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img :src="imagemUppercut" />

          <q-card-section>
            <div class="text-h6">Uppercut</div>
            <div class="text-subtitle2">Dificuldade do movimento</div>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars[2]"
                :max="3"
                color="primary"
              />
              <span class="text-caption text-grey q-ml-sm">Mediano</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "MovimentosdeLuta",
  setup() {
    return {
      stars: [1, 2, 2],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imagemJab:
        "https://www.wikihow.com/images_en/thumb/c/c8/Box-Step-5.jpg/v4-460px-Box-Step-5.jpg.webp",
      imagemDireto:
        "https://www.wikihow.com/images_en/thumb/0/00/Box-Step-6.jpg/v4-460px-Box-Step-6.jpg.webp",
      imagemHook:
        "https://www.wikihow.com/images_en/thumb/d/dd/Box-Step-7.jpg/v4-460px-Box-Step-7.jpg.webp",
      imagemUppercut:
        "https://www.wikihow.com/images_en/thumb/9/95/Box-Step-8.jpg/v4-460px-Box-Step-8.jpg.webp",
    };
  },
});
</script>

<style scoped>
.info {
  padding: 10px 20px;
  margin: 0px 20%;
  border: 1px solid #cccccc;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #cccccc;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
