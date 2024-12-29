<script setup lang="ts">
import { appStore, googlePlay, qrCode } from '~/assets/img';

const emailValue = ref('')
</script>

<template>

  <div class="w-full bg-black text-white flex flex-col items-center justify-center p-10 box-border">
    <!-- mt-[30vh] -->
    <section class="container grid grid-cols-5 gap-4">

      <div class="content-col">
        <p class="col-header-text">Exclusive</p>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <el-input
          placeholder="Enter your email"
          suffix-icon="Promotion"
          v-model="emailValue"
          class="w-[250px]"
        >
        </el-input>
      </div>

      <div class="content-col">
        <p class="col-header-text">Support</p>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div class="content-col">
        <p class="col-header-text">Account</p>
        <!-- Need to set nuxtlink to drespective pages -->
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      <div class="content-col">
        <p class="col-header-text">Quick Link</p>
        <!-- Need to set nuxtlink to drespective pages -->
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div class="content-col">
        <p class="col-header-text">Download App</p>
        <p>Save 3$ with App New User Only</p>
        <div class="w-full flex items-center justify-center gap-1">
          <img :src="qrCode" alt="qr-image" class="cursor-pointer">
          <div class="w-full flex flex-col items-start gap-2">
            <img :src="googlePlay" alt="google-play" class="cursor-pointer">
            <img :src="appStore" alt="app-store" class="cursor-pointer">
          </div>
        </div>
        <div class="flex gap-4">
          <Icon icon="ri:facebook-line" width="25" />
          <Icon icon="tabler:brand-twitter" width="25" />
          <Icon icon="mdi:instagram" width="25" />
          <Icon icon="akar-icons:linkedin-v2-fill" width="25" />
        </div>
      </div>

    </section>
    <div class="divider"></div>
    <section class="flex items-center justify-center gap-4">
      <Icon icon="tdesign:copyright" color="#334155" />
      <p class="text-slate-700">Copyright Rimel 2022. All rights reserved</p>
    </section>
  </div>

</template>

<style scoped>
.content-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.col-header-text {
  font-size: large;
  font-weight: 600;
}
.divider {
  width: 100%;
  border-top: 1px solid #292828;
  margin-block: 25px;
}
</style>