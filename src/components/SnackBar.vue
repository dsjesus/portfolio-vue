<template>

  <v-snackbar v-model="alert.display" :color="alert.type" :timeout="timeout" absolute location="bottom right">
    <div>
      <v-icon class="mr-1" icon="mdi-lock" :color="alert.type"></v-icon>
      {{ alert.text }}
    </div>
  </v-snackbar>
</template>
<script setup lang="ts">
import { useAlertsStore } from "@/stores"
import { storeToRefs } from 'pinia'; 

const store = useAlertsStore()
const {alert} = storeToRefs(store)

defineProps({
  display: {
    type: Boolean,
    require: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'error'
  },
  timeout: {
    type: [Number, String],
    default: 5000
  }
})

</script>
