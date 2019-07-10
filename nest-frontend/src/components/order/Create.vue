<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create Order</h2>
      <form id="create-order-form" @submit.prevent="createOrder">
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
    import axios from "axios";
    import { server } from "../../utils/helper";
    import router from "../../router";
    export default {
            data() {            
                return {
                    id_order: "",
                    order_cost: "",
                    order_date: ""
                };
            },
            created() {    
                this.order_date = new Date().toLocaleDateString();
            },
            methods: {
                createOrder() {
                    let orderData = {
                        id_order: this.id_order,
                        order_cost: this.order_cost,
                        order_date: this.order_date
                    };
                    this.__submitToServer(orderData);
                },
                __submitToServer(data) {
                    axios.post(`${server.baseURL}/back/order`, data).then(data => {
                        router.push({ name: "home" });
                    });
                }
            }   
        };
</script>