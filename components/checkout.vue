<script setup lang="ts">
import type { ElForm } from 'element-plus';
import type { InternalRuleItem, ValidateOption } from 'async-validator';
import type { Values } from 'async-validator';
const productStore = useProductStore()
const { currentProduct } = useProductStore()
const router = useRouter()
const headerStore = useHeaderStore()
const paymentType = ref('bank')
const totalPrice = ref(0)
console.log(currentProduct, 'currentProduct')

currentProduct.forEach(item => {
  totalPrice.value += item.price * +item.qty
})

interface FormData {
  name: string;
  companyName: string;
  address: string;
  addressDetailed: string;
  townCity: string;
  phoneNumber: string;
  email: string;
}

const formData = reactive<FormData>({
  name: '',
  companyName: '',
  address: '',
  addressDetailed: '',
  townCity: '',
  phoneNumber: '',
  email: '',
});

const rules = reactive({
  name: [{ required: true, message: 'Please input the name', trigger: 'blur' }],
  address: [{ required: true, message: 'Please input the Street address', trigger: 'blur' }],
  townCity: [{ required: true, message: 'Please input the Town/City', trigger: 'blur' }],
  phoneNumber: [{ required: true, message: 'Please input the Phone Number', trigger: 'blur' }],
  email: [{ required: true, message: 'Please input the Email address', trigger: 'blur' }]
})

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const validateFormData = async (): Promise<void> => {
  let isValid = true;
  const validations: Array<Promise<void>> = [];

  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('name', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed name:', errorMessage);
        }
        resolve();
      });
    })
  );

  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('address', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed address:', errorMessage);
        }
        resolve();
      });
    })
  );

  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('townCity', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed townCity:', errorMessage);
        }
        resolve();
      });
    })
  );
  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('phoneNumber', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed phoneNumber:', errorMessage);
        }
        resolve();
      });
    })
  );
  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('email', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed email:', errorMessage);
        }
        resolve();
      });
    })
  );

  await Promise.all(validations);
  
  Object.keys(formData).forEach((key) => {
    const typedKey = key as keyof FormData;
    if(key !== 'companyName' && key !== 'addressDetailed'){

      if (formData[typedKey].length === 0) {
        isValid = false;
        return false;
      }

    }
  });

  if(isValid){
    ElNotification.success({
      title: 'Success',
      message: "Successfully ordered"
    });
    productStore.clear()
    headerStore.clear()
    router.push('/')
  }else{
    ElNotification.warning({
      title: 'Warning',
      message: "Please, fill up fields"
    });
  }
};

const handleBreadCrumb = () => {
  headerStore.clear()
}

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10 mb-[50px]">
    <section class="my-[50px] flex justify-between items-center">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" @click="handleBreadCrumb" >Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cart' }">Cart</el-breadcrumb-item>
        <el-breadcrumb-item>Checkout</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="grid grid-cols-2 gap-4">
      <div class="w-[400px] flex flex-col gap-4">
        <p class="text-2xl font-semibold">Billing details</p>

        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="formRef"
          label-width="250px"
          label-position="top"
          class="demo-formData w-full"
        >
          <el-form-item label="Name" prop="name" class="w-full">
            <el-input v-model="formData.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Company name" prop="companyName" class="w-full">
            <el-input v-model="formData.companyName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Street Address" prop="address" class="w-full">
            <el-input v-model="formData.address"  autocomplete="off" />
          </el-form-item>
          <el-form-item label="Apartment, Floor, etc. (optional)" prop="addressDetailed" class="w-full">
            <el-input v-model="formData.addressDetailed"  autocomplete="off" />
          </el-form-item>
          <el-form-item label="Town/City" prop="townCity" class="w-full">
            <el-input v-model="formData.townCity"  autocomplete="off" />
          </el-form-item>
          <el-form-item label="Phone Number" prop="phoneNumber" class="w-full">
            <el-input v-model="formData.phoneNumber"  autocomplete="off" />
          </el-form-item>
          <el-form-item label="Email" prop="email" class="w-full">
            <el-input v-model="formData.email"  autocomplete="off" />
          </el-form-item>
          
        </el-form>

      </div>

      <div class="w-[600px]">
        <section class="max-h-[350px] overflow-auto mb-4">
          <div v-for="(item, idx) in currentProduct" :key="idx" class="flex items-center justify-between border-b-[1px] mb-2 pb-2">
            <span class="flex items-center gap-2">
              <img :src="item.img" alt="product-image" width="50" class="h-12 object-contain">
              <p>{{ item.name }}</p>
            </span>
            <span class="flex items-center justify-between gap-6">
              <p>{{ item.qty }} pcs.</p>
              <p>${{ item.price * +item.qty }}</p>
            </span>
          </div>
        </section>
        <section class="my-4">
          <div class="flex flex-col gap-4 border-2 p-4 box-border rounded">
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
          </div>
        </section>
        <section class="my-4">
          <div class="flex items-center justify-between border-b-[1px] mb-2 pb-2">
            <el-radio v-model="paymentType" label="bank">Bank</el-radio>
            <span class="flex items-center gap-4">
              <Icon icon="logos:visa" width="25" />
              <Icon icon="logos:mastercard" width="25" />
              <Icon icon="logos:unionpay" width="25" />
              <Icon icon="logos:paypal" width="25" />
            </span>
          </div>
          <div>
            <el-radio v-model="paymentType" label="cash">Cash on delivery</el-radio>
          </div>
        </section>
        <section class="flex flex-col gap-4 my-4">
          <span class="flex items-center gap-4">
            <el-input class="w-[150px]"></el-input>
            <el-button type="danger">Apply Coupon</el-button>
          </span>
          <span>
            <el-button type="danger" @click="validateFormData" class="w-[150px]">Place order</el-button>
          </span>
        </section>

      </div>
    
    </section>
  </div>
</template>