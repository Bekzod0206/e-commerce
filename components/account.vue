<script setup lang="ts">

const authStore = useAuthStore()
const { currentUser } = useAuthStore()
const headerStore = useHeaderStore()

const userInfoData = reactive({
  name: currentUser.name,
  lastName: currentUser.lastName,
  address: currentUser.address,
  email: currentUser.email,
  password: currentUser.password,
  chosenProducts: currentUser.chosenProducts,
  cartProducts: currentUser.cartProducts
})

const userPasswordData = reactive({
  currPassword: currentUser.password,
  newPassword: '',
  confirmNewPassword: ''
})

const validatorObj = reactive({
  name: false,
  email: false,
  passwordStatus: false
})

const saveUserChanges = () => {
  if(userPasswordData.newPassword){
    if(userPasswordData.newPassword === userPasswordData.confirmNewPassword){
      userInfoData.password = userPasswordData.confirmNewPassword
    }else{
      validatorObj.passwordStatus = true
      ElNotification.warning({
        title: 'Warning',
        message: "Make sure new password matches"
      });
      return 
    }
  }

  if(!userInfoData.name || !userInfoData.email){
    validatorObj.name = true
    validatorObj.email = true
    ElNotification.warning({
      title: 'Warning',
      message: "Name and email are required"
    });
    return
  }

  authStore.set(userInfoData)
  ElNotification.success({
    title: 'Success',
    message: "Data saved successfully"
  });
}

const handleBreadCrumb = () => {
  headerStore.clear()
}

</script>
<template>
  <div class="w-[80%] mx-auto flex flex-col gap-10">
    <section class="my-[50px] flex justify-between items-center">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" @click="handleBreadCrumb">Home</el-breadcrumb-item>
        <el-breadcrumb-item>My Account</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="flex gap-2">
        Welcome! <p class="text-[#DB4444]">{{ currentUser.name }}</p>
      </span>
    </section>

    <section class="grid grid-cols-3 gap-2 mb-[100px] h-[400px]">
      <div class="flex flex-col gap-4 w-[250px]">
        <span>
          <p class="header-text">Manage My Account</p>
          <span class="sub-section-text">
            <p>
              <NuxtLink to="/account">My Profile</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/">Address Book</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/">My payment options</NuxtLink>
            </p>
          </span>
        </span>
        <span>
          <p class="header-text">My Orders</p>
          <span class="sub-section-text">
            <p>
              <NuxtLink to="/">My Returns</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/">My Cancellations</NuxtLink>
            </p>
          </span>
        </span>
        <span>
          <p class="header-text">
            <NuxtLink to="/wishlist">My Wishlist</NuxtLink>
          </p>
        </span>
      </div>

      <div class="w-full col-span-2">
        <el-card class="box-card h-full w-full">
          <div class="flex flex-col gap-4">

            <p class="text-2xl font-semibold text-[#DB4444]">Edit Your Profile</p>
            
            <div class="line-container">
              <span class="pair-block">
                <p>First Name</p>
                <el-input v-model="userInfoData.name"></el-input>
              </span>
              <span class="pair-block">
                <p>Last Name</p>
                <el-input v-model="userInfoData.lastName"></el-input>
              </span>
            </div>
  
            <div class="line-container">
              <span class="pair-block">
                <p>Email</p>
                <el-input v-model="userInfoData.email"></el-input>
              </span>
              <span class="pair-block">
                <p>Address</p>
                <el-input v-model="userInfoData.address"></el-input>
              </span>
            </div>
  
            <div class="w-full">
              <span class="flex flex-col gap-2">
                <p>Password changes</p>
                <el-input :disabled="true" v-model="userPasswordData.currPassword"></el-input>
                <el-input placeholder="New password" v-model="userPasswordData.newPassword"></el-input>
                <el-input placeholder="Confirmed password" v-model="userPasswordData.confirmNewPassword"></el-input>
              </span>
            </div>

            <div>
              <el-button type="danger" @click="saveUserChanges">Save changes</el-button>
            </div>
          </div>

        </el-card>
      </div>

    </section>

  </div>
</template>
<style scoped>
.header-text{
  font-size: 20px;
  font-weight: 500;
}
.sub-section-text{
  color: gray;
}
.sub-section-text p {
  margin-left: 20px;
}

.line-container{
  display: flex;
  gap: 5px;
}
.pair-block{
  width: 48%
}
</style>