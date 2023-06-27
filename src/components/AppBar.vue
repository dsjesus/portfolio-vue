<template>
  <div>
    <v-navigation-drawer absolute width="auto" color="blue-darken-3" v-model="drawer" temporary>
      <v-list-item
        class="py-3"
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="topway"
        subtitle="topway@hotmail.com"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item prepend-icon="mdi-monitor-dashboard " title="Dashboard"></v-list-item>

        <v-list-group value="registerCompany">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account" title="Cadastro"> </v-list-item>
          </template>
          <v-list-item
            @click="dialog = true"
            value="RegisterCompany"
            class="py-0"
            title="Cadastro de Empresa"
          >
            <template #prepend>
              <v-icon class="ma-1" icon="mdi-pencil"></v-icon>
            </template>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file-chart "
              title="Relatórios"
            ></v-list-item>
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-shield-lock "
              title="Segurança"
            ></v-list-item>
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-wardrobe-outline"
              title="Fechamento"
            ></v-list-item>
          </template>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :order="order" color="blue-darken-3" permanent :elevation="2">
      <template #prepend>
        <v-app-bar-nav-icon
          v-model="order"
          hide-details
          inset
          true-value="-1"
          false-value="0"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>SIGA</v-app-bar-title>
      </template>
      <template #append>
        <v-btn icon="mdi-logout"></v-btn>
      </template>
    </v-app-bar>
  </div>
  <dialogCompany :value="dialog" @value="dialog = $event" />
</template>
<script setup lang="ts">
import dialogCompany from '@/components/DialogCreateCompany.vue'
import { ref } from 'vue'

const dialog = ref(false)
const drawer = ref()
const order = ref(0)
</script>
