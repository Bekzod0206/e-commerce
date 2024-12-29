<script setup lang="ts">
  const value = ref('english')
  const langOptions = reactive([
    {
      value: 'english',
      label: 'English'
    },
    {
      value: 'russian',
      label: 'Russian'
    }
  ])
</script>
<template>
  <div class="w-full flex p-3 box-border bg-[#000000] text-white">
    <span class="w-[80%] text-center">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <a href="#" target="_self" class="underline font-medium ml-2">Shop Now</a>
    </span>

    <div class="w-[20%]">
      <div class="w-[150px]">
        <el-select
          v-model="value"
          placeholder="Select"
        >
          <el-option
            v-for="item in langOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

  </div>
</template>
<style scoped>
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>