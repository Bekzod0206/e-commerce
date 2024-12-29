<script setup lang="ts"></script>
<template>
  <div class="w-full min-h-full">
    <div>
      <TopHeader />
      <Navbar class="sticky top-0 bg-white z-50 pb-5 border-b-[1px]" />
      <div>
        <slot />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<style scoped></style>