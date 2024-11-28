import { createRouter, createWebHistory } from 'vue-router'
import SettingsPage from '@/views/SettingsPage.vue'
import ChatView from '@/views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Settings',
      component: SettingsPage,
    },
    {
      path: '/chat/:session_id',
      name: 'Chat',
      component: ChatView,
    },
  ],
})

export default router