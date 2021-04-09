import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

// Defining routes
const routes = [
  {
    path: '/shop',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/shop'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
