<script setup lang="ts">
import { Dynammics } from '~/assets/img';
import { bestSellerArr } from '~/constants';

const dataArr = bestSellerArr

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
  <div class="w-full flex flex-col items-center justify-between">
    
    <section class="w-full flex gap-2">
      <span class="w-[15px] rounded bg-[#DB4444]"></span>
      <p class="text-lg font-semibold text-[#DB4444]">This Month</p>
    </section>

    <section class="w-full flex justify-between items-center mt-2">
      <p class="text-3xl font-semibold mr-[150px]">Best selling products</p>
      <NuxtLink to="/all-products">
        <el-button
          type="danger"
          :size="'large'"
        >
          View All
        </el-button>
      </NuxtLink>
    </section>

    <section class="grid grid-cols-4 gap-10 my-10">
      <template v-if="dataArr.length > 0">
        <UiProductCard v-for="(object, idx) in dataArr" :data-obj="object" :key="idx"/>
      </template>
      <template v-else>
        No Data
      </template>
    </section>

    <section class="w-full h-[500px] bg-black grid grid-cols-2 text-white">

      <div class="flex flex-col justify-center items-start gap-10 p-6 pl-[100px] box-border">
        <el-link
          type="success"
          href="#product-categories"
          class="text-lg"
        >
          Categories
        </el-link>
        <p class="text-5xl font-semibold tracking-wide">Enhance Your <br> Music Experience</p>
        <div class="flex gap-4">
          <span class="custom-date">
            <p>{{ formatTime(remainingTime).days }}</p>
            <p>days</p>
          </span>
          <span class="custom-date">
            <p>{{ formatTime(remainingTime).hours }}</p>
            <p>hours</p>
          </span>
          <span class="custom-date">
            <p>{{ formatTime(remainingTime).minutes }}</p>
            <p>minutes</p>
          </span>
          <span class="custom-date">
            <p>{{ formatTime(remainingTime).secs }}</p>
            <p>seconds</p>
          </span>
        </div>
        <el-button
          type="success"
          :size="'large'"
          >
          Buy Now!
        </el-button>
      </div>

      <div class="flex items-center justify-center" style="background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 10%, rgba(0, 0, 0, 100) 100%);">
        <img :src="Dynammics" alt="dynamics">
      </div>

    </section>

  </div>
</template>
<style scoped>
.custom-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  text-align: center;
  vertical-align: center;
  background-color: white;
  color: black;
}
.custom-date p:nth-child(1){
  font-weight: 500;
  font-size: 20px;
}
</style>