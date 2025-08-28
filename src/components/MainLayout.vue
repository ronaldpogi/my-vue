<template>
  <div class="wrapper">
    <MainHeader />
    <MainNav />
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import MainNav from '@/components/MainNav.vue'
import MainHeader from '@/components/MainHeader.vue'

const sidebar = useSidebarStore()
</script>

<style>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #eef0fc;
  overflow: hidden;
}

.content {
  width: auto;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  box-sizing: border-box;
}

.content::-webkit-scrollbar {
  width: 0;
}

.content-collapse {
  left: 65px;
}
</style>
