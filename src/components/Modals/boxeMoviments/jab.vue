<template>
  <q-dialog v-model="localIsOpen" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">Título do Modal</div>
      </q-card-section>

      <q-card-section>
        <p>Conteúdo do modal vai aqui.</p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" @click="fecharModal" />
        <q-btn flat label="Confirmar" color="positive" @click="confirmar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "JabMovimento",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:isOpen", "confirm"],
  computed: {
    localIsOpen: {
      get() {
        return this.isOpen;
      },
      set(value) {
        this.$emit("update:isOpen", value);
      },
    },
  },
  methods: {
    fecharModal() {
      this.localIsOpen = false; // Emite 'update:isOpen'
    },
    confirmar() {
      this.$emit("confirm"); // Notifica o pai sobre a confirmação
      this.fecharModal();
    },
  },
};
</script>
