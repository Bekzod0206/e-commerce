<script setup lang="ts">

const authStore = useAuthStore()
const { currentUser } = useAuthStore()

const isFavourite = ref(false)
const isViewed = ref(false)
const isBtnShow = ref(false)

const toggleFavourite = (img: string): void => {
  // isFavourite.value = !isFavourite.value
  if(currentUser.email){
    if(!currentUser.chosenProducts.includes(img)){
      currentUser.chosenProducts.push(img)
      isFavourite.value = true
    }else{
      const currIndex = currentUser.chosenProducts.indexOf(img)
      currentUser.chosenProducts.splice(currIndex, 1)
      isFavourite.value = false
    }
    authStore.set(currentUser)
  }else{
    ElNotification.warning({
      title: 'Warning',
      message: "Sign in to start shopping"
    });
  }
}
const toggleView = () => {
  if(!currentUser.email){
    ElNotification.warning({
      title: 'Warning',
      message: "Sign in to start shopping"
    });
  }else{
    isViewed.value = !isViewed.value
  }
}

const toggleAddToCartBtn = (value: boolean): void => {
  isBtnShow.value = value
}

const toggleCartProduct = (img: string): void => {
  if(currentUser.email){
    if(currentUser.cartProducts.includes(img)){
      const currIndex = currentUser.cartProducts.indexOf(img)
      currentUser.cartProducts.splice(currIndex, 1)
    }else{
      currentUser.cartProducts.push(img)
    }
    authStore.set(currentUser)
  }else{
    ElNotification.warning({
      title: 'Warning',
      message: "Sign in to start shopping"
    });
  }
}

interface DataObj {
  name: string
  price: number
  oldPrice: number
  rate: number
  ratePoint: number
  discount: number,
  img: string,
  colors?: string[]
}

const props = defineProps<{
  dataObj: DataObj;
}>();
const rateValue = props.dataObj.rate ? props.dataObj.rate : 0
const colorArr = props.dataObj.colors && props.dataObj.colors.length > 0 ? props.dataObj.colors : []

</script>
<template>
  <div class="flex flex-col gap-2">
    <section
      class="box-card relative h-[250px] w-[250px] p-0 flex items-center justify-center bg-[#F5F5F5] rounded"
      @mouseover="toggleAddToCartBtn(true)" @mouseout="toggleAddToCartBtn(false)"
    >
      <img :src="props.dataObj?.img" alt="product-image">
      <p
        v-if="props.dataObj.discount"
        class="
          absolute
          top-2
          left-2
          bg-[#DB4444]
          text-white
          p-1
          rounded
          box-border
        "
      >
        {{ props.dataObj?.discount ? `-${props.dataObj?.discount}%` : '' }}
      </p>
      <div
        class="
          absolute
          top-2
          right-2
        "
      >
        <Icon
          :icon="isFavourite || currentUser.chosenProducts.includes(props.dataObj?.img) ? 'material-symbols:favorite' : 'material-symbols:favorite-outline'"
          width="20"
          class="cursor-pointer rounded-full"
          @click="() => toggleFavourite(props.dataObj.img)"
        />
        <Icon
          :icon="isViewed ? 'material-symbols:visibility-rounded' : 'material-symbols:visibility-outline'"
          width="20"
          class="cursor-pointer rounded-full"
          @click="toggleView"
        />
      </div>
      <el-button
        type="info"
        v-show="isBtnShow"
        class="w-full absolute bottom-0"
        @click="() => toggleCartProduct(props.dataObj.img)"
      >
        <template v-if="currentUser.cartProducts.includes(props.dataObj.img)">
          Remove From Cart
        </template>
        <template v-else>
          Add To Cart
        </template>
      </el-button>
    </section>
    <p class="font-semibold">{{ props.dataObj?.name }}</p>
    <span class="flex gap-2">
      <p>
        ${{ props.dataObj?.price }}
      </p>
      <p v-if="props.dataObj.oldPrice" class="line-through text-[gray]">
        ${{ props.dataObj?.oldPrice }}
      </p>
    </span>
    <span>
      <el-rate
        v-model="rateValue"
        disabled
        show-score
        text-color="#ff9900"
        :score-template="`(${props.dataObj.ratePoint})`">
      </el-rate>
    </span>

    <!-- <section
      v-if="props.dataObj.colors && props.dataObj.colors?.length > 0"
      class="flex gap-2"
    >
      <div
        v-for="(item, idx) in props.dataObj.colors"
        :key="idx"
        class="rounded-full h-[15px] w-[15px] cursor-pointer"
        :class="`bg-${item}-500`"
      ></div>
    </section> -->

  </div>
</template>