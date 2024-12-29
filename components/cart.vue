<script setup lang="ts">
import { totaProductsArray } from '~/constants';
import { useProductStore } from '~/stores/checkout.store';
interface ProductData {
  name: string;
  img: string;
  price: number;
  oldPrice: number;
  rate: number;
  ratePoint: number;
  discount: number;
  qty: number;
}

const router = useRouter()
const totalProducts = totaProductsArray
const { currentUser } = useAuthStore()
const productStore = useProductStore()
const headerStore = useHeaderStore()
const currentProductsArr = reactive<Array<ProductData>>([]);

watch(
  () => currentUser,
  (newValue) => {
    currentProductsArr.splice(0, currentProductsArr.length);
    if (newValue.cartProducts.length > 0) {
      totalProducts.forEach((item) => {
        if (newValue.cartProducts.includes(item.img)) {
          currentProductsArr.push({...item, qty: 1});
        }
      });
    }
  },
  { deep: true, immediate: true }
);

const totalPrice = computed(() => {
  if(currentProductsArr.length > 0){
    let totalPrice = 0
    currentProductsArr.forEach(item => {
      totalPrice += item.price * item.qty
    })
    return totalPrice
  }
  return 0
})

const handleCheckout = () => {
  productStore.set(currentProductsArr)
  router.push('/checkout')
}

const handleBreadCrumb = () => {
  headerStore.clear()
}

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10 mb-[50px]">
    <template v-if="currentUser.email">
      <section class="my-[50px] flex justify-between items-center">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }" @click="handleBreadCrumb">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Cart</el-breadcrumb-item>
        </el-breadcrumb>
      </section>
  
      <section>
        <el-card class="box-card">
          <template v-if="currentUser.cartProducts.length > 0">
            <div slot="header" class="clearfix grid grid-cols-4 gap-4 text-xl font-semibold border-b-[2px] pb-2 mb-2">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div
              v-for="(item, idx) in currentProductsArr"
              :key="idx"
              class="text item grid grid-cols-4 gap-6 my-2 h-[60px] hover:bg-[#DB4444] hover:text-white ease-in-out duration-200 p-2 rounded"
            >
              <span class="flex items-center gap-2">
                <img :src="item.img" alt="product-image" width="50" class="h-12 object-contain">
                <p>{{ item.name }}</p>
              </span>
              <span class="flex items-center gap-2">
                <p>{{ item.price }}</p>
              </span>
              <span class="flex items-center gap-2">
                <el-input type="number" min="1" v-model="item.qty" class="w-[100px]"></el-input>
              </span>
              <span class="flex items-center gap-2">
                <p>$ {{ +item.price * item.qty }}</p>
              </span>
            </div>
          </template>
          <template v-else>
            <el-empty description="No products">
              <NuxtLink to="/all-products">
                <el-button type="danger">
                  Go shopping
                </el-button>
              </NuxtLink>
            </el-empty>
          </template>
        </el-card>
      </section>
  
      <section>
        <NuxtLink to="/all-products">
          <el-button type="danger">Return To Shop</el-button>
        </NuxtLink>
      </section>
      <section class="grid grid-cols-2 gap-2" v-if="currentUser.cartProducts.length > 0">
        <div class="flex gap-2 items-start">
          <el-input placeholder="Coupon Code" class="w-[250px]"></el-input>
          <el-button type="danger">Apply Coupon</el-button>
        </div>
        <div class="w-[400px] flex flex-col gap-4 border-2 p-4 box-border rounded">
          <p class="text-lg font-semibold">Cart Total</p>
          <span class="w-full flex justify-between items-center border-b-[1px] pb-2">
            <p>Subtotal:</p>
            <p>{{ totalPrice }}</p>
          </span>
          <span class="w-full flex justify-between items-center border-b-[1px] pb-2">
            <p>Shipping:</p>
            <p>Free</p>
          </span>
          <span class="w-full flex justify-between items-center border-b-[1px] pb-2">
            <p>Total:</p>
            <p>{{ totalPrice }}</p>
          </span>
          <el-button type="danger" @click="handleCheckout">Process To Checkout</el-button>
        </div>
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
<style scoped></style>