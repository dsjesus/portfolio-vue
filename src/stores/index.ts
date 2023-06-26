import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref({
    display: false,
    text: '',
    type: ''
  })

  const getAlert = computed(() => {
    return alert.value
  })

  function openAlert(text, type) {
    alert.value = {
      display: true,
      text,
      type
    }
  }
  return { alert, getAlert, openAlert, }
})
