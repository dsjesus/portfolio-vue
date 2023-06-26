
<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
    <snackbar/>
  </v-app>
</template>

<script setup lang="ts">
import snackbar from "@/components/SnackBar.vue"
</script>
<style scoped></style>
