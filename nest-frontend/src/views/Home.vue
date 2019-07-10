<template>
  <div>
    <div class="text-center">
      <h1>Nest Order Tutorial</h1>
      <p>This is the description of the List of orders built with Nest.js, Vue.js and MongoDB</p>
      <div v-if="posts.length === 0">
        <h2>No orders found at the moment</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="order in orders" :key="order._id">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h2 class="card-img-top">{{ order.id_order }}</h2>
            <p class="card-text">{{ order.order_cost }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px;">
                <router-link
                  :to="{name: 'Order', params: {id: order._id}}"
                  class="btn btn-sm btn-outline-secondary"
                >View Order</router-link>
                <router-link
                  :to="{name: 'Edit', params: {id: post._id}}"
                  class="btn btn-sm btn-outline-secondary"
                >Edit Order</router-link>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  v-on:click="deleteOrder(order._id)"
                >Delete Order</button>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-muted">Order create on: {{ order.order_date}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { server } from "@/utils/helper";
import axios from "axios";
export default {
  data() {
    return {
      orders: []
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      axios
        .get(`${server.baseURL}/back/orders`)
        .then(data => (this.orders = data.data));
    },
    deleteOrder(id) {
      axios
        .delete(
          `${server.baseURL}/blog/delete?orderID=${id}`
        )
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>