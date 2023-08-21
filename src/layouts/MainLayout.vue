<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: red;">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- Quasar App -->
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    titulo: 'Pagina Inicial',
    descricao: 'Informações gerais',
    icon: 'school',
    rota: '/'
  },
  {
    titulo: 'Movimentos',
    descricao: 'Sobre golpes e movimentos no geral',
    icon: 'school',
    rota: 'movimentos'
  },
  {
    titulo: 'Estilos de luta',
    descricao: 'Tecnicas de lutadores',
    icon: 'code',
    rota: 'estilosdeluta'
  },
  {
    titulo: 'Boxeadores',
    descricao: 'Sobre alguns boxeadores',
    icon: 'chat',
    rota: 'boxeadores'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
