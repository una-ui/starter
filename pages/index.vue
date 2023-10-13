<template>
  <main class="mx-auto max-w-lg px-4 py-8 lg:px-8 sm:px-6">
    <div class="mx-auto max-w-xl rounded-md space-y-10">
      <div class="flex justify-center">
        <AppLogo class="h-30"/>
      </div>

      <div class="text-center space-y-1">
        <h1 class="text-3xl font-extrabold text-muted">
          Sign in to your account
        </h1>
        <p class="text-sm font-medium text-primary">
          Powered by <NLink to="https://unaui.com" target="_blank">https://unaui.com/</NLink>
        </p>
      </div>

      <div class="space-y-4">
        <FormLogin />

        <div class="border border-base rounded-md p-4 text-center text-sm">
          No account yet?
          <NLink btn="link square" to="/">
            Create an account here
          </NLink>
        </div>
      </div>
    </div>
  </main>
</template>
