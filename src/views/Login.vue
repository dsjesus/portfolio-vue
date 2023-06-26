<template>
  <div class="w-100 d-flex justify-center">
    <v-card width="400">
      <v-card-title class="bg-blue-darken-3 d-flex justify-space-between"
        >Top Way - Siga
        <div>
          <v-icon icon="mdi-unfold-more-vertical"></v-icon>
        </div>
      </v-card-title>
      <v-form ref="form" @submit.prevent="login">
        <v-card-text class="mt-3 pb-0">
          <v-text-field
            v-model="userData.username"
            variant="underlined"
            prepend-icon="mdi-account"
            :rules="[rules.required]"
            placeholder="Login"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.password"
            required
            variant="underlined"
            prepend-icon="mdi-lock"
            type="password"
            :rules="[rules.required]"
            placeholder="Password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pt-0">
          <v-btn :loading="loading" type="submit" variant="flat" color="blue-darken-3">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//@ts-ignore
import { authUser } from '@/repository/AuthRepository'
import { useAlertsStore } from '@/stores'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useAlertsStore()
const { openAlert } = store
const userData = ref({
  username: '',
  password: ''
})
const loading = ref(false)
const form = ref<HTMLFormElement>()
async function login(event: any) {
  const { valid } = await form.value?.validate()
  loading.value = true
  authUser(userData.value.username, userData.value.password)
    .then((res: any) => {
      openAlert(res.data.message, 'success')
      router.push({name: "home"})
    })
    .catch((error) => {
      openAlert(error.data.message, 'error')
    })
    .finally(() => {
      loading.value = false
    })
}
const rules = {
  required: (value: any) => !!value || 'Este campo é obrigatorio'
}
</script>
