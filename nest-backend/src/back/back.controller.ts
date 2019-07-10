import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BackService } from './back.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
@Controller('back')
export class BackController {
    constructor(private backService: BackService) { }

    @Get('orders')
    async getOrders (@Res() res) {
        const orders = await this.backService.getOrders();     
        return res.status(HttpStatus.OK).json(orders);
    }

    @Get('order/:orderID')
    async getOrder (@Res() res, @Param('orderID', new ValidateObjectId()) orderID) {
        const order = await this.backService.getOrder(orderID);
        if (!order) throw new NotFoundException('Order does not exist!');    
        return res.status(HttpStatus.OK).json(order);
    }

    @Post('/order')
    async addOrder (@Res() res, @Body() createOrderDTO: CreateOrderDTO) {
        const newOrder = await this.backService.addOrder(createOrderDTO);
        return res.status(HttpStatus.OK).json({
            message: "Order has been submitted successfully!",
            order: newOrder
        })
    }

    @Put('/edit')
    async editOrder (@Res() res, @Query('orderID', new ValidateObjectId()) orderID, @Body() createOrderDTO: CreateOrderDTO) {
        const editedOrder = await this.backService.editOrder(orderID, createOrderDTO);
        if (!editedOrder) throw new NotFoundException('Order does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Order has been successfully updated',
            post: editedOrder
        })
    }

    @Delete('/delete')
    async deleteOrder(@Res() res, @Query('orderID', new ValidateObjectId()) orderID) {
        const deletedOrder = await this.backService.deleteOrder(orderID); 
        if (!deletedOrder) throw new NotFoundException('Order does not exist!');   
        return res.status(HttpStatus.OK).json({
            message: 'Order has been deleted!',
            order: deletedOrder
        })
    }
}