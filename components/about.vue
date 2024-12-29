<script setup lang="ts">
import { businessMan, businessWoman, officeWorker, twoGirls } from '~/assets/img';

const headerStore = useHeaderStore()

const cardDataArr: Array<{id: number, qty: string, icon: string, description: string}> = [
  {
    id: 1,
    qty: '10.5k',
    icon: 'stash:shop-light',
    description: 'Sallers active in our site'
  },
  {
    id: 2,
    qty: '33k',
    icon: 'heroicons-outline:currency-dollar',
    description: 'Monthly product sale'
  },
  {
    id: 3,
    qty: '45.5k',
    icon: 'material-symbols-light:shopping-bag',
    description: 'Customer active in our site'
  },
  {
    id: 4,
    qty: '25k',
    icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
    description: 'Annual gross sale in our site'
  },
]

const usersDataArr: Array<{id: number, name: string, position: string, img: string}> = [
  {
    id: 1,
    name: 'Tom Cruise',
    position: 'Founder & chairman',
    img: officeWorker
  },
  {
    id: 2,
    name: 'Emma Watson',
    position: 'Managing director',
    img: businessWoman
  },
  {
    id: 3,
    name: 'Will Smith',
    position: 'Product Designer',
    img: businessMan
  },
]

const handleBreadCrumb = () => {
  headerStore.clear()
}

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10">
    <section class="mt-[50px] mb-[100px]">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" @click="handleBreadCrumb">Home</el-breadcrumb-item>
        <el-breadcrumb-item>About</el-breadcrumb-item>
      </el-breadcrumb>
    </section>

    <section class="grid grid-cols-2 gap-2">
      <div class="flex flex-col gap-6 justify-center">
        <p class="text-5xl font-semibold tracking-wide">Out Story</p>
        <p class="w-[80%]">
          Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
          Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and
          serves 3 millioons customers across the region.
        </p>
        <p class="w-[80%]">
          Exclusive has more than 1 Million products to offer, growing at a very fast.
          Exclusive offers a diverse assotment in categories ranging from consumer.
        </p>
      </div>
      <div>
        <img :src="twoGirls" alt="two-girls">
      </div>
    </section>
    <section class="my-[50px] flex items-center justify-center gap-6">
      
      <!-- my-[100px] -->
      <div
        v-for="(item, idx) in cardDataArr"
        :key="idx"
        class="
          card-element
          w-[250px]
          h-[250px]
          p-4
          flex
          flex-col
          items-center
          justify-center
          gap-4
          border
          rounded
          text-center
          hover:text-white
          hover:bg-[#DB4444]
          cursor-pointer
        "
      >
        <span class="icon-parent p-2 rounded-full bg-black border-[10px]">
          <Icon :icon="item.icon" width="40" />
        </span>
        <p class="text-3xl font-semibold">{{ item.qty }}</p>
        <p>{{ item.description }}</p>
      </div>
    </section>

    <section class="h-fit flex items-center justify-center">

      <el-carousel :autoplay="false" indicator-position="outside" height="500px" class="w-[70%]">
        <el-carousel-item v-for="item in 5" :key="item" class="flex items-center justify-between gap-8">
          <div v-for="obj in usersDataArr" :key="obj.id" class="flex flex-col gap-2">
            <img :src="obj.img" alt="user-image">
            <p class="text-2xl font-semibold">{{ obj.name }}</p>
            <p>{{ obj.position }}</p>
            <span class="flex gap-2">
              <el-link href="https://twitter.com" target="_blank">
                <Icon icon="hugeicons:twitter" width="20" />
              </el-link>
              <el-link href="https://twitter.com" target="_blank">
                <Icon icon="mdi:instagram" width="20"/>
              </el-link>
              <el-link href="https://twitter.com" target="_blank">
                <Icon icon="cib:linkedin-in" width="20"/>
              </el-link>
            </span>
          </div>
        </el-carousel-item>
      </el-carousel>

    </section>
  
  </div>
</template>
<style scoped>
.card-element .icon-parent{
  color: white !important;
}
.card-element:hover .icon-parent {
  background-color: white !important;
  color: black !important;
}

.el-carousel__indicator {
  border-radius: 50%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: white;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: white;
}
</style>