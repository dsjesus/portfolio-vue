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

  return { alert, getAlert, openAlert }
})

export const useCompanyStore = defineStore('company', () => {
  const companies = ref([
    {
      status: 'Ativo',
      cnpj: '0123456789',
      fantasyName: 'Nome Fantasia',
      corporateName: 'Teste',
      groupCompany: 'Grupo A'
    }
  ])

  const getCompanies = computed(() => {
    return companies.value
  })

  function createCompany(company) {
    companies.value.push(company)
  }

  return { getCompanies, createCompany }
})
