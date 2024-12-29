<script setup lang="ts">
const route = useRouter();
const error = useNuxtApp().payload.error;
const headerStore = useHeaderStore()
headerStore.set({status: ''})

const handleError = () => {
  route.push('/');
};
</script>

<template>
  <div class="w-full h-full">
    <TopHeader />
    <Navbar />
    <div class="w-[80%] mx-auto">
      
      <div class="mt-[50px] mb-[100px]">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>404 Error</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="flex flex-col items-center justify-center my-[100px]">
        <div class="flex flex-col gap-4 text-center">
          <p class="text-7xl font-medium tracking-wider">404 Not Found</p>
          <p>Your visited page not found. You may go home page.</p>
        </div>
        <el-button
          type="danger"
          size="large"
          class="mt-[70px]"
          @click="handleError"
        >
          Back to home page
        </el-button>
      </div>

    </div>
    
    <Footer />
  </div>
</template>