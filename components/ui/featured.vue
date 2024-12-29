<script setup lang="ts">
import { amazonDynamics, parfume, playstation, woman } from '~/assets/img';

</script>
<template>
  <div class="w-full flex flex-col items-center justify-between">
    
    <section class="w-full flex gap-2">
      <span class="w-[15px] rounded bg-[#DB4444]"></span>
      <p class="text-lg font-semibold text-[#DB4444]">Featured</p>
    </section>

    <section class="w-full flex justify-between items-center mt-2">
      <p class="text-3xl font-semibold mr-[150px]">New Arrival</p>
      <div class="flex">
        <el-button icon="Back" size="large" circle></el-button>
        <el-button icon="Right" size="large" circle></el-button>
      </div>
    </section>

    <section class="w-full h-[600px] mt-[50px]">
      <div class="grid grid-cols-4 grid-rows-2 gap-2 h-[600px]">

        <div class="bg-black col-span-2 row-span-2 relative flex flex-col items-center">
          <img :src="playstation" alt="playstation" class="absolute bottom-0">
          <div class="w-full flex flex-col gap-2 items-start text-white absolute bottom-8 left-8">
            <p class="text-4xl font-semibold">PlayStation 5</p>
            <p>Black and White version of the PS 5 <br> coming out on sale</p>
            <el-link type="info" class="text-lg">Shop now</el-link>
          </div>
        </div>
        <div class="bg-black col-span-2 relative flex flex-col items-center">
          <img :src="woman" alt="woman" class="absolute bottom-0">
          <div class="w-full flex flex-col gap-2 items-start text-white absolute bottom-8 left-8">
            <p class="text-4xl font-semibold">Women's Collection</p>
            <p>Featured women's collects that <br> give you another vibe</p>
            <el-link type="info" class="text-lg">Shop now</el-link>
          </div>
        </div>
        <div class="bg-black relative flex flex-col items-center">
          <img :src="amazonDynamics" alt="amazon" class="absolute bottom-0">
          <div class="w-full flex flex-col gap-2 items-start text-white absolute bottom-8 left-8">
            <p class="text-4xl font-semibold">Speakers</p>
            <p>Amazon wireless speakers</p>
            <el-link type="info" class="text-lg">Shop now</el-link>
          </div>
        </div>
        <div class="bg-black relative flex flex-col items-center">
          <img :src="parfume" alt="parfume" class="absolute bottom-0">
          <div class="w-full flex flex-col gap-2 items-start text-white absolute bottom-8 left-8">
            <p class="text-4xl font-semibold">Perfume</p>
            <p>GUCCI INSIDE OUT EDP</p>
            <el-link type="info" class="text-lg">Shop now</el-link>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>