import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import LoginView from '@/views/LoginView'
import ToDoListView from '@/views/ToDoListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/password',
    name: 'password',
    component: ForgotPassword
  },
  {
    path: '/todolist2',
    name: 'todolist2',
    component: ToDoListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
