<script setup lang="ts">
import { Headset, Mouse } from '@element-plus/icons-vue';

const categoryArr: Array<{id: number, name: string}> = [
  {id: 1, name: 'Phones'},
  {id: 2, name: 'Computers'},
  {id: 3, name: 'SmartWatch'},
  {id: 4, name: 'Camera'},
  {id: 5, name: 'HeadPhones'},
  {id: 6, name: 'Gaming'},
]

</script>
<template>
  
  <div class="w-full flex flex-col items-center justify-between">
    
    <div class="w-full flex gap-2">
      <span class="w-[15px] rounded bg-[#DB4444]"></span>
      <p class="text-lg font-semibold text-[#DB4444]">Categories</p>
    </div>

    <div class="w-full flex justify-between items-center mt-2">
      <p class="text-3xl font-semibold mr-[150px]">Browse By Category</p>
      <div class="flex">
        <el-button icon="Back" size="large" circle></el-button>
        <el-button icon="Right" size="large" circle></el-button>
      </div>
    </div>

    <div class="w-full flex gap-8 items-center justify-center">

      <div
        v-for="(item, idx) in categoryArr"
        :key="idx"
        class="
          my-[100px]
          w-[200px]
          h-[200px]
          flex
          flex-col
          items-center
          justify-center
          gap-8
          border
          rounded
          hover:text-white
          hover:bg-[#DB4444]
          cursor-pointer
        "
      >
        <span>
          <template v-if="item.id === 1">
          <ElIconCellphone width="60"/>
          </template>
          <template v-else-if="item.id === 2">
          <Monitor width="60" />
          </template>
          <template v-else-if="item.id === 3">
          <Watch width="60" />
          </template>
          <template v-else-if="item.id === 4">
          <Camera width="60" />
          </template>
          <template v-else-if="item.id === 5">
          <Headset width="60" />
          </template>
          <template v-else-if="item.id === 6">
          <Mouse width="60" />
          </template>

        </span>
        <p>{{ item.name }}</p>
      </div>

    </div>


  </div>

</template>