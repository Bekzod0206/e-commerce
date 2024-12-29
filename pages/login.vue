<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout'
})
</script>
<template>
  <div>
    <Auth :page-status="'log-in'" />
  </div>
</template>