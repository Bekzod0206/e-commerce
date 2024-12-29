<script setup lang="ts">
import { iPhone } from '~/assets/img';
</script>
<template>
  <div class="w-full flex items-center justify-center p-4 box-border">
    <el-carousel :autoplay="false" trigger="click" height="400px" class="mx-auto w-[900px]">
      <el-carousel-item v-for="item in 4" :key="item">
        
        <section class="w-full h-full grid grid-cols-2 gap-2">
          <div class="text-white flex flex-col gap-2 p-[50px] justify-center">
            <div class="flex items-center w-[80%]">
              <Icon icon="raphael:apple" style="color: white; width: 50px; height: 50px;"/>
              <p class="ml-[15px]">iPhone 14 Series</p>
            </div>
            <p class="text-6xl leading-snug">
              Up to 10% <br> off Voucher
            </p>
            <div class="w-full flex gap-2 items-center cursor-pointer">
              <p class="underline">Shop now</p>
              <el-icon style="color: white">
                <ElIconRight />
              </el-icon> 
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img :src="iPhone" alt="phone">
          </div>
        </section>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
.el-carousel__item h3 {
  color: white;
  text-align: center;
  font-size: 25px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: black;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: black;
}
</style>