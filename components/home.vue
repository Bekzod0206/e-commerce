<script setup lang="ts">
import { categoryArr, productDataArr } from '~/constants';

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10">
    <section class="w-full flex gap-4">
      <div class="w-[15%] pr-[10px] py-2 box-border right-border">
        <ul>
          <li
            v-for="(str, idx) in categoryArr"
            :key="idx"
            class="
              flex
              items-center
              justify-between
              cursor-pointer
              hover:bg-[#DB4444]
              hover:text-white
              ease-in-out
              duration-300
              rounded
              p-2
              border-box
            "
          >
            {{ str }}
            <el-icon v-if="idx === 0 || idx === 1">
              <ArrowRight />
            </el-icon> 
          </li>

        </ul>
      </div>
      <div class="w-[85%]">
        <UiProductCarousel />
      </div>
    </section>

    <section>
      <UiOfferCarousel :data-arr="productDataArr" />
    </section>

    <section id="product-categories">
      <UiCategories />
    </section>

    <section>
      <UiBestSeller />
    </section>

    <section>
      <UiProducts />
    </section>

    <section>
      <UiFeatured />
    </section>


  </div>
</template>
<style scoped>
.el-dropdown-link {
  display: flex;
  gap: 2px;
}
.right-border {
  border-right: 1px solid #c1c1c1;
}
</style>