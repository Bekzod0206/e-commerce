<script setup lang="ts">
import { totaProductsArray } from '~/constants';
interface ProductData {
  name: string;
  img: string;
  price: number;
  oldPrice: number;
  rate: number;
  ratePoint: number;
  discount: number;
}

const router = useRouter()
const totalProducts = totaProductsArray
const authStore = useAuthStore()
const { currentUser } = useAuthStore()

const currentProductsArr = reactive<Array<ProductData>>([]);
const offerProductsArr = reactive<Array<ProductData>>([]);

watch(
  () => currentUser,
  (newValue) => {
    currentProductsArr.splice(0, currentProductsArr.length);
    offerProductsArr.splice(0, offerProductsArr.length);
    if (newValue.chosenProducts.length > 0) {
      totalProducts.forEach((item) => {
        if (newValue.chosenProducts.includes(item.img)) {
          currentProductsArr.push(item);
        }else{
          if(offerProductsArr.length < 4){
            offerProductsArr.push(item)
          }
        }
      });
    }else{
      totalProducts.forEach((item) => {
        if(offerProductsArr.length < 4){
          offerProductsArr.push(item)
        }
      });
    }
  },
  { deep: true, immediate: true }
);

const moveAllToBag = () => {
  currentUser.chosenProducts.forEach(item => {
    if(!currentUser.cartProducts.includes(item)){
      currentUser.cartProducts.push(item)
    }
  })
  authStore.set(currentUser)
  ElNotification.success({
    title: 'Success',
    message: "Successfully add to cart"
  });
}

</script>
<template>
  <div class="w-[80%] mx-auto mb-6 flex flex-col gap-10">
    <template v-if="currentUser.email">

      <section>
        <div class="flex justify-between items-center mt-3 mb-6">
          <p class="text-lg">Wishlist ({{ currentProductsArr.length }})</p>
          <el-button @click="moveAllToBag">Move All To Bag</el-button>
        </div>
        <template v-if="currentProductsArr.length > 0">
          <div class="grid grid-cols-4 gap-2">
            <UiProductCard v-for="(object, idx) in currentProductsArr" :data-obj="object" :key="idx"/>
          </div>
        </template>
        <template v-else>
          <el-empty description="No chosen products"></el-empty>
        </template>
      </section>
  
      <section>
        <div class="w-full flex items-center justify-between mb-6">
          <div class="flex gap-2">
            <span class="w-[15px] rounded bg-[#DB4444]"></span>
            <p class="text-lg font-semibold text-[#DB4444]">Our Products</p>
          </div>
          <NuxtLink to="/all-products">
            <el-button>See All</el-button>
          </NuxtLink>
        </div>
        <template v-if="offerProductsArr.length > 0">
          <div class="grid grid-cols-4 gap-2">
            <UiProductCard v-for="(object, idx) in offerProductsArr" :data-obj="object" :key="idx"/>
          </div>
        </template>
        <template v-else>
          <el-empty description="No chosen products"></el-empty>
        </template>
      </section>
    </template>
    <template v-else>
      <el-empty description="No Data, Sign up or Log in to start shopping">
        <div class="flex gap-4 items-center justify-center">
          <span class="p-2 bg-[#DB4444] text-white rounded">
            <NuxtLink to="/auth">
              Sign up
            </NuxtLink>
          </span>
          <span class="p-2 bg-[#DB4444] text-white rounded">
            <NuxtLink to="/login">
              Log in
            </NuxtLink>
          </span>
        </div>
      </el-empty>
    </template>
  
  </div>
</template>