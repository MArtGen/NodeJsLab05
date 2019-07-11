<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px;">
        <small>
          <button class="btn btn-success" v-on:click="navigate()">View All Orders</button>
        </small>
      </h4>
      <hr />
      <h2>{{ order.id_order }}</h2>
      <h5>
        <span class="glyphicon glyphicon-time"></span>
            Order cost and date: {{order.order_cost}}, {{order.order_date}}.
      </h5>
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
    getOrder () {
      axios
        .get(`${server.baseURL}/back/order/${this.id}`)
        .then(data => (this.order = data.data))
    },
    navigate () {
      router.go(-1)
    }
  }
}
</script>
