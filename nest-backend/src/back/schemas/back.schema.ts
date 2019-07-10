import * as mongoose from 'mongoose';
export
const OrdersSchema = new mongoose.Schema (
    {
        id_order: 
            Number,
        order_date: 
            Date,
        order_cost: 
            Number
    }
)