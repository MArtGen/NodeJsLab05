import { Document } from 'mongoose';

export interface Order extends Document {
    readonly id_order : number;
    readonly order_cost: number;
    readonly order_date: string;
}