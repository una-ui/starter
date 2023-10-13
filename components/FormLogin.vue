<script setup lang="ts">
const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

function submitForm(){
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <form
    class="flex flex-col border border-base gap-4 rounded-md p-8"
    @submit.prevent="submitForm()"
  >
    <div
      :class="{ 'n-disabled': loading }"
      class="flex flex-col gap-4"
    >
      <NFormGroup label="Name" status="error" message="Required" required>
        <NInput v-model="form.name" placeholder="John Doe" />
      </NFormGroup>

      <NFormGroup label="Email">
        <NInput v-model="form.email" placeholder="johndoe@email.com" />
      </NFormGroup>

      <NFormGroup label="Password">
        <NInput v-model="form.password" type="password" />
      </NFormGroup>

      <NFormGroup label="Confirm Password">
        <NInput v-model="form.confirmPassword" type="password" />
      </NFormGroup>
    </div>

    <NButton class="mt-4" type="submit" label="Submit" :loading="loading" />
    <NButton btn="solid-white" label="Cancel" @click="loading = false" />
  </form>
</template>
