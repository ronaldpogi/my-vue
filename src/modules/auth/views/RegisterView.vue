<template>
  <div class="login-bg">
    <div class="login-container">
      <div class="login-header">
        <img class="logo mr10" src="../../../assets/img/logo.png" alt="" />
        <!-- <div class="login-title">REGISTER</div> -->
      </div>
      <el-form :model="param" :rules="rules" ref="register" size="large">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username" autocomplete="off">
            <template #prepend>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="param.email" placeholder="Email" autocomplete="off">
            <template #prepend>
              <el-icon>
                <Message />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter="submitForm()"
            autocomplete="off"
          >
            <template #prepend>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" size="large" @click="submitForm()"
          >REGISTER</el-button
        >
        <p class="login-text">
          Already have an account?&nbsp;
          <el-link type="primary" @click="$router.push('/login')">Log in now</el-link>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

interface LoginInfo {
  username: string
  password: string
  email: string
}

const param = reactive<LoginInfo>({
  username: '',
  password: '',
  email: '',
})

const rules: FormRules = {
  username: [
    {
      required: true,
      message: 'Required',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: 'Required', trigger: 'blur' }],
}

const submitForm = () => {}
</script>

<style scoped>
.login-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url(../../../assets/img/login-bg.jpg) center/cover no-repeat;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.logo {
  width: 120px;
}

.login-title {
  font-size: 22px;
  color: #333;
  font-weight: bold;
}

.login-container {
  width: 450px;
  border-radius: 5px;
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
}

.pwd-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: -10px 0 10px;
  color: #787878;
}

.pwd-checkbox {
  height: auto;
}

.login-btn {
  display: block;
  width: 100%;
}

.login-tips {
  font-size: 12px;
  color: #999;
}

.login-text {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  color: #787878;
}
</style>
