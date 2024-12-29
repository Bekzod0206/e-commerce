<script setup lang="ts">
import type { ElForm } from 'element-plus';
import { phoneCart } from '~/assets/img';
import type { InternalRuleItem, ValidateOption } from 'async-validator';
import type { Values } from 'async-validator';

const props = defineProps<{
  pageStatus: string;
}>();

const authStore = useAuthStore()
const router = useRouter()

interface FormData {
  name: string;
  email: string;
  password: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  password: ''
});

const rules = reactive({
  name: [{ required: true, message: 'Please input the name', trigger: 'blur' }],
  email: [{ required: true, message: 'Please input the Email or phone', trigger: 'blur' }],
  password: [
    { required: true, message: 'Password is required', trigger: 'blur' },
    {
      validator: (
        rule: InternalRuleItem,
        value: string,
        callback: (error?: string | Error) => void,
        source: Values,
        options: ValidateOption
      ) => {
        if(value.length < 8){
          callback(new Error('Password must contain at least 8 characters'));
        } else {
          callback();
        }
      },
      trigger: 'blur',
    },
  ],
})

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const validateFormData = async (): Promise<void> => {
  let isValid = true;
  const validations: Array<Promise<void>> = [];

  if (props.pageStatus === 'sign-up') {
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
  }

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

  validations.push(
    new Promise<void>((resolve) => {
      formRef.value?.validateField('password', (errorMessage) => {
        if (errorMessage) {
          console.error('Validation failed password:', errorMessage);
        }
        resolve();
      });
    })
  );
  await Promise.all(validations);
  
  Object.keys(formData).forEach((key) => {
    const typedKey = key as keyof FormData;
    if (props.pageStatus === 'log-in') {
      if (key !== 'name' && formData[typedKey].length === 0) {
        isValid = false;
        return false;
      }
    }else{
      if (formData[typedKey].length === 0) {
        isValid = false;
        return false;
      }
    }
  });

  if(isValid){
    if(props.pageStatus === 'sign-up'){
      const newData = {...formData, address: '', lastName: '', chosenProducts: [], cartProducts: [] }
      authStore.set(newData)
      router.push('/')
    }else{
      let userData = localStorage.getItem('user');
      console.log(userData, 'userData')

      if (userData) {
        const parsedData = JSON.parse(userData) as {
          name: string;
          password: string;
          email: string;
          address: string;
          lastName: string;
          chosenProducts: string[];
          cartProducts: string[];
        };
        if (formData.email === parsedData.email) {
          if(formData.password === parsedData.password){
            authStore.set(parsedData)
            router.push('/')
          }else{
            ElNotification.error({
              title: 'Error',
              message: "Password mismatch for the stated user"
            });
          }
        } else {
          ElNotification.error({
            title: 'Error',
            message: "User doesn't exist"
          });
        }
      }else{
        ElNotification.error({
          title: 'Error',
          message: "User doesn't exist"
        });
        router.push('/auth')
      }

    }
  }else{
    ElNotification.warning({
      title: 'Warning',
      message: "Please, fill up fields"
    });
  }
};


</script>
<template>
  <div class="grid grid-cols-2 gap-2 w-[80%] mx-auto">
    <div class="flex items-center justify-center">
      <img :src="phoneCart" alt="phoneCart">
    </div>

    <div class="flex items-center justify-center">
      <div class="w-[400px] flex flex-col items-left justify-center gap-6">
        <p class="text-4xl font-semibold" v-if="props.pageStatus === 'sign-up'">Create an account</p>
        <p class="text-4xl font-semibold" v-else-if="props.pageStatus === 'log-in'">Log in to Exclusive</p>
        <p>Enter your details below</p>
        
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="formRef"
          label-width="250px"
          label-position="top"
          class="demo-formData w-full"
        >
          <el-form-item label="Name" prop="name" class="w-full" v-if="props.pageStatus === 'sign-up'">
            <el-input v-model="formData.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Email or phone" prop="email" class="w-full">
            <el-input v-model="formData.email" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Password" prop="password" class="w-full">
            <el-input type="password" v-model="formData.password" show-password />
          </el-form-item>
          
          <el-form-item v-if="props.pageStatus === 'sign-up'">
            <el-button type="danger" @click="validateFormData" class="w-full">Create Account</el-button>
          </el-form-item>
          <el-form-item v-if="props.pageStatus === 'sign-up'">
            <el-button @click="validateFormData" class="w-full">
              <Icon icon="logos:google-icon" width="18" class="mr-3"/>
              Sign up with Google
            </el-button>
          </el-form-item>

          <el-form-item v-else-if="props.pageStatus === 'log-in'">
            <el-button type="danger" @click="validateFormData" class="w-[48%]">Log in</el-button>
            <el-button @click="validateFormData" class="w-[48%]">Forget Password?</el-button>
          </el-form-item>

        </el-form>

        <p class="text-center text-slate-500">
          <template v-if="props.pageStatus === 'sign-up'">
            Already have an account
            <NuxtLink to="/login" class="ml-2 underline">
              Log in
            </NuxtLink>
          </template>
          <template v-else>
            Don't have an account
            <NuxtLink to="/auth" class="ml-2 underline">
              Sign up
            </NuxtLink>
          </template>
        </p>

      </div>
    </div>
  
  </div>
</template>