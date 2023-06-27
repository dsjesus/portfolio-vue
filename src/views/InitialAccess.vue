<template>
 <div class="fill-height mt-5">
  <appBar />
    <v-sheet elevation="10">
      <v-row class="d-flex justify-center">
        <v-col cols="9" class="d-flex flex-wrap justify-center text-center">
          <v-card
            class="ma-2"
            v-for="(card, i) in cards"
            :key="i"
            :color="card.color"
            width="350"
            height="170"
          >
            <v-card-title> {{ card.title }} </v-card-title>
            <v-card-text>
              <v-icon class="mt-6" size="x-large">{{ card.icon }}</v-icon>
            </v-card-text>
            <v-card-title>{{ card.subtitle }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  <theFooter />
 </div>
</template>
<script setup lang="ts">
import appBar from '@/components/AppBar.vue'
import theFooter from '@/components/TheFooter.vue'
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Empresa',
    icon: 'mdi-domain',
    subtitle: 'F1',
    color: 'blue-darken-4'
  },
  {
    title: 'Tipo de Despesa',
    icon: 'mdi-bulletin-board ',
    subtitle: 'F2',
    color: 'light-blue-darken-3'
  },
  {
    title: 'Tipo de movimentação',
    icon: 'mdi-calculator',
    subtitle: 'F3',
    color: 'indigo-darken-3'
  },
  {
    title: 'Fechamento',
    icon: 'mdi-package-variant-closed ',
    subtitle: 'F4',
    color: 'teal-darken-1'
  },
  {
    title: 'Despesas',
    icon: 'mdi-cash-minus',
    subtitle: 'F5',
    color: 'blue-grey-darken-1'
  },
  {
    title: 'Aprovação Fechamento',
    icon: 'mdi-cash-check ',
    subtitle: 'F6',
    color: 'teal-darken-3'
  }
])
const title = ref([
  'Empresa',
  'Tipo de Despesa',
  'Tipo de movimentação',
  'Fechamento',
  'Despesas',
  'Aprovação Fechamneto'
])
const icon = ref(['mdi-close', 'mdi-close', 'mdi-close', 'mdi-close', 'mdi-close', 'mdi-close'])
const subTitle = ref(['F1', 'F2', 'F3', 'F4', 'F5', 'F6'])
</script>
