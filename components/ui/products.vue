<script setup lang="ts">
import { generalProductsArr } from '~/constants';

const dataArr = generalProductsArr
</script>
<template>
  <div class="w-full flex flex-col items-center justify-between">
    
    <section class="w-full flex gap-2">
      <span class="w-[15px] rounded bg-[#DB4444]"></span>
      <p class="text-lg font-semibold text-[#DB4444]">Our Products</p>
    </section>

    <section class="w-full flex justify-between items-center mt-2">
      <p class="text-3xl font-semibold mr-[150px]">Explore Our Products</p>
      <div class="flex">
        <el-button icon="Back" size="large" circle></el-button>
        <el-button icon="Right" size="large" circle></el-button>
      </div>
    </section>

    <section class="grid grid-cols-4 gap-10 my-10">
      <template v-if="dataArr.length > 0">
        <UiProductCard v-for="(object, idx) in dataArr" :data-obj="object" :key="idx"/>
      </template>
      <template v-else>
        No Data
      </template>
    </section>

    <NuxtLink to="/all-products">
      <el-button
        type="danger"
        :size="'large'"
        class="mt-[50px]"
      >
        View All Products
      </el-button>
    </NuxtLink>

  </div>
</template>