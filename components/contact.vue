<script setup lang="ts">
import type { ElForm } from 'element-plus';
import type { InternalRuleItem, ValidateOption } from 'async-validator';
import type { Values } from 'async-validator';

const headerStore = useHeaderStore()
const formData = ref({
  name: '',
  email: '',
  phone: '',
  description: ''
})

const rules = reactive({
  name: [{ required: true, message: 'Please input the name', trigger: 'blur' }],
  email: [{ required: true, message: 'Please input the Email', trigger: 'blur' }],
  phone: [{ required: true, message: 'Please input the phone', trigger: 'blur' }],
})

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const validateFormData = () => {
  formRef.value?.validateField('name', (errorMessage) => {
    if (errorMessage) {
      console.error('Validation failed:', errorMessage);
    }
  });
  formRef.value?.validateField('email', (errorMessage) => {
    if (errorMessage) {
      console.error('Validation failed:', errorMessage);
    }
  });
  formRef.value?.validateField('phone', (errorMessage) => {
    console.log(errorMessage)
    if (errorMessage) {
      console.error('Validation failed:', errorMessage);
    }
  });
};

const handleBreadCrumb = () => {
  headerStore.clear()
}

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10">
    <section class="my-[50px]">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" @click="handleBreadCrumb">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Contact</el-breadcrumb-item>
      </el-breadcrumb>
    </section>

    <section class="grid grid-cols-3 gap-2 mb-[100px] h-[400px]">
      <div>
        <el-card class="box-card h-full">
          <div class="h-[400px] flex flex-col justify-center gap-8">
            <div class="flex flex-col gap-6">
              <span class="flex gap-4 items-center">
                <div class="bg-[#DB4444] p-2 rounded-full w-fit">
                  <Icon icon="material-symbols:call-outline" width="25" color="white"/>
                </div>
                <p class="text-xl font-medium">Call To Us</p>
              </span>
              <p>We are available 24/7, 7 days a week</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div class="flex flex-col gap-6">
              <span class="flex gap-4 items-center">
                <div class="bg-[#DB4444] p-2 rounded-full w-fit">
                  <Icon icon="material-symbols:mail-outline" width="25" color="white"/>
                </div>
                <p class="text-xl font-medium">Write To Us</p>
              </span>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="col-span-2">

        <el-card class="box-card h-full justify-center">

          <div class="h-[400px] flex flex-col justify-center">
            <el-form
              :model="formData"
              status-icon
              :rules="rules"
              ref="formRef"
              label-width="250px"
              label-position="top"
              class="demo-formData w-full"
            >
              <el-col class="flex gap-2">
                <el-form-item label="Name" prop="name" class="w-full">
                  <el-input v-model="formData.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Email" prop="email" class="w-full">
                  <el-input v-model="formData.email" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Phone" prop="phone" class="w-full">
                  <el-input v-model="formData.phone" autocomplete="off" />
                </el-form-item>
              </el-col>
              <el-form-item label="Description" prop="description" class="w-full">
                <el-input type="textarea" :rows="6" v-model="formData.description" autocomplete="off" />
              </el-form-item>
              
              <el-col class="flex justify-end">
                <el-form-item class="w-fit">
                  <el-button type="danger" size="large" @click="validateFormData" class="w-50">Send Message</el-button>
                </el-form-item>
              </el-col>
  
            </el-form>
          </div>

        </el-card>

      </div>

    </section>


    
  
  </div>
</template>
<style scoped>
.el-card__body {
  height: 100%;
}
</style>