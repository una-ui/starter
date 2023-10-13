<script setup lang="ts">
const loading = ref(false)

const form = ref({
  email: '',
  password: '',
})

function submitForm(){
  loading.value = true
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
      <NFormGroup label="Email">
        <NInput v-model="form.email" placeholder="johndoe@email.com" />
      </NFormGroup>

      <NFormGroup label="Password">
        <NInput v-model="form.password" type="password" />
      </NFormGroup>
    </div>

    <NButton v-if="!loading" class="mt-4" type="submit" label="Submit" :loading="loading" />
    <NButton v-else btn="solid-white" label="Cancel" @click="loading = false" />
  </form>
</template>
