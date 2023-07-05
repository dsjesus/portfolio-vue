<template>
  <appBar />
  <v-row justify="center">
    <v-col cols="6">
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="getCompanies"
        item-value="name"
        class="elevation-1"
      >
        <template #top>
          <v-toolbar flat>
            <v-toolbar-title> Empresas </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = true" class="mb-2 bg-blue-darken-3"> Novo registro </v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-col>
    <dialogCreateCompany :value="dialog" @value="dialog = $event"></dialogCreateCompany>
  </v-row>
  <theFooter />
</template>
<script setup lang="ts">
import appBar from '@/components/AppBar.vue'
import theFooter from '@/components/TheFooter.vue'
import dialogCreateCompany from '@/components/DialogCreateCompany.vue'
import { ref } from 'vue'
import { useCompanyStore } from '@/stores'

const store = useCompanyStore()
const { getCompanies } = store

let dialog = ref(false)
let itemsPerPage = ref(5)
let headers = ref([
  { title: 'Status', align: 'start', key: 'status' },
  { title: 'CNPJ', key: 'cnpj' },
  { title: 'Razão social', key: 'corporateName' },
  { title: 'Nome fantasia', key: 'fantasyName' },
  { title: 'Grupo de empresa', key: 'groupCompany' }
])
</script>
