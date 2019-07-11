<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">View All Orders</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit Order</h2>
      <form id="edit-order-form" @submit.prevent="editOrder">
       <div class="form-group col-md-12">
          <label for="id_order">Order ID</label>
          <input
            type="text"
            id="id_order"
            v-model="id_order"
            name="id_order"
            class="form-control"
            placeholder="Enter ID"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="order_cost">Order Cost</label>
          <input
            type="text"
            id="order_cost"
            v-model="order_cost"
            name="order_cost"
            class="form-control"
            placeholder="Enter Cost"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="order_date">Order Date</label>
          <input
            type="text"
            id="order_date"
            v-model="order_date"
            name="order_date"
            class="form-control"
            placeholder="Enter Date"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create Order</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { server } from '../../utils/helper'
import axios from 'axios'
import router from '../../router'
export default {
  data () {
    return {
      id: 0,
      order: {}
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getOrder()
  },
  methods: {
    editOrder () {
      let orderData = {
        id_order: this.id_order,
        order_cost: this.order_cost,
        order_date: this.order_date
      }

      axios
        .put(`${server.baseURL}/back/edit?orderID=${this.id}`, orderData)
        .then(data => {
          router.push({ name: 'home' })
        })
    },
    getOrder () {
      axios
        .get(`${server.baseURL}/back/order/${this.id}`)
        .then(data => (this.post = data.data))
    },
    navigate () {
      router.go(-1)
    }
  }
}
</script>
