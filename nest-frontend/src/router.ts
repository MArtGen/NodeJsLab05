import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home.vue'
import EditComponent from '@/components/order/Edit.vue'
import CreateComponent from '@/components/order/Create.vue'
import OrderComponent from '@/components/order/Order.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/order/:id', name: 'Order', component: OrderComponent }
  ]
})
