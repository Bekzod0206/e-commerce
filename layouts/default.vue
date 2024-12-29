<script setup lang="ts"></script>

<template>
  <div class="w-full min-h-full">
    <div>
      <TopHeader />
      <Navbar class="sticky top-0 bg-white z-50 pb-5 border-b-[1px]" />
      <div>
        <slot />
        <UiService />
      </div>
      <Footer />
    </div>
    <!-- Back to Top Button -->
    <el-backtop class="bg-slate-400 border-slate-400 text-white"/>
  </div>
</template>

<style scoped></style>
