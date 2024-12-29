<script setup lang="ts">
import { serviceDataArr } from '~/constants';

interface ServiceObj {
  id: string
  name: string
  description: string
}

const dataArr: Array<ServiceObj> = serviceDataArr
</script>
<template>
  <div class="w-[80%] mx-auto my-[100px] grid grid-cols-3">
    
    <div v-for="(item, idx) in dataArr" :key="idx" class="flex flex-col items-center justify-center gap-4">
      <span class="p-2 rounded-full bg-black border-[10px]">
        <template v-if="item.id === 'delivery'">
          <Van width="35" color="white"/>
        </template>
        <template v-else-if="item.id === 'call-center'">
          <Service width="35" color="white"/>
        </template>
        <template v-else-if="item.id === 'guarantee'">
          <CircleCheck width="35" color="white"/>
        </template>
      </span>
      <p class="text-2xl uppercase font-semibold">{{ item.name }}</p>
      <p class="text-slate-600">{{ item.description }}</p>
    </div>

  </div>
</template>