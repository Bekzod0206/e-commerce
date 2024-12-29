<script setup lang="ts">
import { useHeaderStore } from '~/stores/header.store';


const route = useRouter();
const authStore = useAuthStore()
const { currentUser } = useAuthStore()

const headerStore = useHeaderStore()
const { currentHeader } = useHeaderStore()

const userStatus = ref(false)
if(currentUser.name){
  userStatus.value = true
}

const activeIndex = ref('home')
activeIndex.value = currentHeader
console.log(currentHeader, 'currentHeader in navbar')
const searchVal = ref('')

const handleSelect = (status: string): void => {
  activeIndex.value = status
  if(status === 'home'){
    route.push('/');
  }else{
    route.push(status);
  }
  headerStore.set({status})
}

const userSectionData: Array<{icon: string, text: string, status: string}> = [
  {
    icon: 'material-symbols:account-circle-full',
    text: 'Manage My Account',
    status: 'account'
  },
  {
    icon: 'ic:outline-shopping-bag',
    text: 'My Order',
    status: 'order'
  },
  {
    icon: 'material-symbols:cancel-outline-rounded',
    text: 'My Cancellation',
    status: 'cancellation'
  },
  {
    icon: 'material-symbols:kid-star-outline-sharp',
    text: 'My Reviews',
    status: 'rewiev'
  },
  {
    icon: 'solar:logout-2-outline',
    text: 'Logout',
    status: 'logout'
  }
]

const handleUserMenu = (status: string): void => {
  console.log(status, 'status')
  if(status === 'logout'){
    authStore.clear()
    headerStore.clear()
    route.push('/login')
    activeIndex.value = ''
    return
  }
  route.push('/account')
  activeIndex.value = 'account'
  headerStore.set({status: 'account'})
}

</script>
<template>
  <div class="w-full mx-auto m-4 mb-0 px-[200px] flex items-center justify-between navbar-parent">
    
    <div>
      <NuxtLink to="/" class="text-xl font-medium">Exclusive</NuxtLink>
    </div>

    <div class="w-[400px]">
      <ul class="flex gap-2 items-center justify-center">
        <li
          class="p-2 rounded w-fit text-lg hover:bg-[#DB4444] hover:text-white cursor-pointer transition ease-in-out"
          :class="{ 'border-b-2' : activeIndex === 'home'}"
          @click="handleSelect('home')"
        >
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li
          class="p-2 rounded w-fit text-lg hover:bg-[#DB4444] hover:text-white  cursor-pointer transition ease-in-out"
          :class="{ 'border-b-2' : activeIndex === 'contact'}"
          @click="handleSelect('contact')"
        >
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li
          class="p-2 rounded w-fit text-lg hover:bg-[#DB4444] hover:text-white  cursor-pointer transition ease-in-out"
          :class="{ 'border-b-2' : activeIndex === 'about'}"
          @click="handleSelect('about')"
        >
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li
        v-if="!userStatus"
          class="p-2 rounded w-fit text-lg hover:bg-[#DB4444] hover:text-white  cursor-pointer transition ease-in-out"
          :class="{ 'border-b-2' : activeIndex === 'auth'}"
          @click="handleSelect('auth')"
        >
          <NuxtLink to="/auth">Sign Up</NuxtLink>
        </li>
      </ul>
    </div>
    
    <div class="flex items-center justify-center gap-4">
      <el-input
        placeholder="What are you looking for?"
        suffix-icon="Search"
        v-model="searchVal"
        class="w-[250px]"
      >
      </el-input>

      <!-- to="/wishlist" -->
      <div
        class="hover:bg-[#DB4444] hover:text-white p-2 cursor-pointer rounded-[50%] transition ease-in-out delay-100"
        @click="handleSelect('wishlist')"
        :class="{'bg-[#DB4444] text-white' : activeIndex === 'wishlist'}"
      >
        <el-badge
          :value="currentUser.chosenProducts.length"
          class="item"
          :hidden="!currentUser.chosenProducts.length && true"
        >
          <Icon icon="material-symbols:favorite-outline" width="25"/>
        </el-badge>
      </div>

      <div
        class="hover:bg-[#DB4444] hover:text-white p-2 cursor-pointer rounded-[50%] transition ease-in-out delay-100"
        @click="handleSelect('cart')"
        :class="{'bg-[#DB4444] text-white' : activeIndex === 'cart'}"
      >
        <el-badge
          :value="currentUser.cartProducts.length"
          class="item"
          :hidden="!currentUser.cartProducts.length && true"
        >
          <Icon icon="material-symbols:shopping-cart-outline" width="25"/>
        </el-badge>
      </div>

      <el-popover
        v-if="userStatus"
        placement="bottom"
        width="250"
        trigger="click"
      >
        <ul class="flex flex-col gap-3">
          <li
            v-for="(obj, idx) in userSectionData"
            class="
              flex
              items-center
              gap-6
              cursor-pointer
              hover:bg-[#DB4444]
              hover:text-white
              p-2
              rounded
            "
            :key="idx"
            @click="() => handleUserMenu(obj.status)"
          >
            <Icon :icon="obj.icon" width="25" />
            <p class="text-base">{{ obj.text }}</p>
          </li>
        </ul>
        <template #reference>
          <span
            class="hover:bg-[#DB4444] hover:text-white rounded-full p-2 cursor-pointer"
            :class="{ 'bg-[#DB4444] text-white' : activeIndex === 'account' }"
          >
            <Icon icon="material-symbols:account-circle-full" width="25" />
          </span>
        </template>
      </el-popover>

    </div>
    
  </div>
</template>
<style scoped></style>