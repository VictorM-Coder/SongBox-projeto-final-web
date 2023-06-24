<script setup lang="ts">
import {useNotificationStore} from "@/stores/useNotification";
import ToastContainer from "@/components/toast/ToastContainer.vue";
import Toast from "@/components/toast/Toast.vue";

const notificationStore = useNotificationStore()
</script>

<template>
  <router-view></router-view>
  <ToastContainer>
    <Toast v-for="message in notificationStore.messages" :key="message.id"
           :id="message.id"
           :message="message.content"
           :status="message.status"
    ></Toast>
  </ToastContainer>
</template>


<style scoped>
</style>