<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface DataArr {
  name: string
  price: number
  oldPrice: number
  rate: number
  ratePoint: number
  discount: number
  img: string
}

const props = defineProps<{
  dataArr: DataArr[];
}>();

const totalTimeInSeconds = 3 * 24 * 60 * 60;
const remainingTime = ref(totalTimeInSeconds);

let timer: ReturnType<typeof setInterval>;
const formatTime = (seconds: number) => {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, secs };
};

onMounted(() => {
  timer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      clearInterval(timer);    }
  }, 1000);
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>

  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full flex gap-2">
      <span class="w-[15px] rounded bg-[#DB4444]"></span>
      <p class="text-lg font-semibold text-[#DB4444]">Today's</p>
    </div>

    <div class="w-full flex items-end justify-between">
      <section class="flex items-center gap-4">
        <p class="text-3xl font-semibold mr-[150px]">Flash Sales</p>
        <div>
          <p>Days</p>
          <p class="text-3xl font-semibold">{{ formatTime(remainingTime).days }}</p>
        </div>
        <p class="text-3xl text-[#DB4444]">:</p>
        <div>
          <p>Hours</p>
          <p class="text-3xl font-semibold">{{ formatTime(remainingTime).hours }}</p>
        </div>
        <p class="text-3xl text-[#DB4444]">:</p>
        <div>
          <p>Minutes</p>
          <p class="text-3xl font-semibold">{{ formatTime(remainingTime).minutes }} </p>
        </div>
        <p class="text-3xl text-[#DB4444]">:</p>
        <div>
          <p>Seconds</p>
          <p class="text-3xl font-semibold">{{ formatTime(remainingTime).secs }} </p>
        </div>
      </section>
      <section class="flex">
        <el-button icon="Back" size="large" circle></el-button>
        <el-button icon="Right" size="large" circle></el-button>
      </section>
    </div>


    <div class="grid grid-cols-4 gap-10 my-10">
      <template v-if="dataArr.length > 0">
        <UiProductCard v-for="(object, idx) in props.dataArr" :data-obj="object" :key="idx"/>
      </template>
      <template v-else>
        No Data
      </template>
    </div>

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
<style scoped></style>