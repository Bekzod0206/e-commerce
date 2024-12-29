<script setup lang="ts">
import { totaProductsArray } from '~/constants';

const totalProducts = totaProductsArray
</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col items-center justify-center my-8">
    <p class="w-full text-2xl font-semibold mb-6">All Products</p>

    <div class="flex flex-wrap items-center justify-center gap-6">
      <UiProductCard v-for="(object, idx) in totalProducts" :data-obj="object" :key="idx"/>
    </div>
  </div>
</template>