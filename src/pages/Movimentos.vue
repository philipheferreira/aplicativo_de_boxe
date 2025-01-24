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
                readonly
              />
              <span class="text-caption text-grey q-ml-sm">Fácil</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat class="bg-red text-white" @click="abrirModal"
              >Ler Mais</q-btn
            >
          </q-card-actions>
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
                readonly
              />
              <span class="text-caption text-grey q-ml-sm">Fácil</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat class="bg-red text-white">Ler Mais</q-btn>
          </q-card-actions>
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
                readonly
              />
              <span class="text-caption text-grey q-ml-sm">Mediano</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat class="bg-red text-white">Ler Mais</q-btn>
          </q-card-actions>
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
                v-model="stars[1]"
                :max="3"
                color="primary"
                readonly
              />
              <span class="text-caption text-grey q-ml-sm">Mediano</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat class="bg-red text-white">Ler Mais</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img :src="imagemGazellaPunch" style="height: 187.5px" />

          <q-card-section>
            <div class="text-h6">Soco da Gazella</div>
            <div class="text-subtitle2">Dificuldade do movimento</div>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars[3]"
                :max="3"
                color="primary"
                readonly
              />
              <span class="text-caption text-grey q-ml-sm">Dificil</span>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat class="bg-red text-white">Ler Mais</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-btn label="Abrir Modal" color="primary" @click="abrirModal" />
    <JabModal v-model:isOpen="modalAberto" @confirm="handleConfirm" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import JabModal from "../components/Modals/boxeMoviments/jab.vue";
export default defineComponent({
  name: "MovimentosdeLuta",
  components: {
    JabModal,
  },
  setup() {
    return {
      modalAberto: false,
      stars: [1, 2, 3, 4],
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
      imagemGazellaPunch: "https://i.redd.it/obpotfdamns71.jpg",
    };
  },
  methods: {
    abrirModal() {
      this.modalAberto = true;
    },
    handleConfirm() {
      console.log("Modal confirmado!");
    },
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
