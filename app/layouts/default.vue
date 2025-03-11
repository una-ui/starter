<template>
  <div class="container mx-auto px-4 md:px-6 lg:px-8">
    <AppHeader/>

    <main>
      <slot />
    </main>

    <LazyAppFooter/>
  </div>
</template>
