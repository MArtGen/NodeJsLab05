import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class BackService {
    constructor (@InjectModel('Order') private readonly orderModel: Model<Order>) { }
            
    async getOrders(): Promise<Order[]> {        
        const orders = await this.orderModel.find().exec();       
        return orders;
    }
    
    async getOrder(orderID: any): Promise<Order> {   
        const post = await this.orderModel
                    .findById(orderID)
                    .exec();
        return post;
    }
    
    async addOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
        const newOrder = await this.orderModel(createOrderDTO);
        return newOrder.save();
    }
    
    async editOrder(orderID: any, createOrderDTO: CreateOrderDTO): Promise<Order> {
        
        const editedOrder = await this.orderModel
                            .findByIdAndUpdate(orderID, createOrderDTO, { 
                                new: true 
                            });
        return editedOrder;
    }
    
    async deleteOrder(orderID: any): Promise<any> {
            
        const deletedOrder = await this.orderModel
                    .findByIdAndRemove(orderID);
        return deletedOrder;
    }
}