import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/order/Edit';
import CreateComponent from '@/components/order/Create';
import OrderComponent from '@/components/order/Order';
Vue.use(Router)
export 
default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/order/:id', name: 'Order', component: OrderComponent }
  ]
});
