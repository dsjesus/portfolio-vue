<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title class="bg-blue-darken-3">Registrar/Editar Empresa</v-card-title>
        <v-tabs v-model="tab" color="blue-darken-3">
          <v-tab value="one">
            <v-icon size="x-large" icon="mdi-account-details"></v-icon>
            GERAIS</v-tab
          >
          <v-tab value="two">
            <v-icon size="x-large" icon="mdi-home-account"></v-icon>
            ENDREÇO</v-tab
          >
        </v-tabs>
        <v-divider></v-divider>
        <v-form ref="form" @submit.prevent="save">
          <div class="d-flex ma-3">
            <v-combobox
              v-model="status"
              :rules="[rules.required]"
              required
              :items="['Ativo', 'Suspenso', 'Fechado', 'Bloqueado']"
              variant="outlined"
              placeholder="Status"
            ></v-combobox>
            <v-text-field
              v-model="cnpj"
              :rules="[rules.required]"
              required
              class="ml-3"
              variant="outlined"
              placeholder="CNPJ"
            ></v-text-field>
          </div>
          <div class="d-flex mx-3">
            <v-text-field
              v-model="razaoSocial"
              :rules="[rules.required]"
              required
              variant="outlined"
              placeholder="Razão Social"
            ></v-text-field>
            <v-text-field
              v-model="nameFantasia"
              :rules="[rules.required]"
              required
              class="ml-3"
              variant="outlined"
              placeholder="Nome Fantasia"
            ></v-text-field>
          </div>
          <v-combobox
            v-model="groupCompany"
            :rules="[rules.required]"
            required
            :items="['A', 'B', 'C', 'D']"
            class="mx-3"
            variant="outlined"
            placeholder="Grupo de Empresa"
          ></v-combobox>
          <v-divider></v-divider>

          <v-card-actions class="d-flex justify-end">
            <v-btn class="bg-error" @click="dialog = false">Cancelar</v-btn>
            <v-btn :disabled="singInButtonDisable" @click="save" class="bg-blue-darken-3"
              >Salvar</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { useAlertsStore } from '@/stores'
import { computed } from 'vue'
import { ref } from 'vue'

const store = useAlertsStore()
const { openAlert } = store

const emit = defineEmits(['value'])
const props = defineProps(['value'])
const singInButtonDisable = computed(() => {
  return (
    status.value <= 0 ||
    cnpj.value <= 0 ||
    razaoSocial.value <= 0 ||
    nameFantasia.value <= 0 ||
    groupCompany.value <= 0 ||
    !form
  )
})
const dialog = computed({
  get() {
    return props.value
  },
  set(currentValue) {
    emit('value', currentValue)
  }
})
let status = ref()
let cnpj = ref()
let razaoSocial = ref()
let nameFantasia = ref()
let groupCompany = ref()
const tab = ref(null)
const form = ref<HTMLFormElement>()
const rules = {
  required: (value: any) => !!value || 'Este campo é obrigatorio'
}

async function save(event: any) {
  const { valid } = await form.value?.validate()
  openSanck()
  status.value = ''
  cnpj.value = ''
  razaoSocial.value = ''
  nameFantasia.value = ''
  groupCompany.value = ''
  dialog.value = false
}

function openSanck() {
  openAlert('Registrado com sucesso.', 'success')
}
</script>
