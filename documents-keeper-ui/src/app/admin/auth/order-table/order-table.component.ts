import { Component } from '@angular/core';
import { OrderRepository } from 'app/model/order.repository';
import { Order } from 'app/model/order.model';

@Component({
    moduleId: module.id,
    templateUrl: 'order-table.component.html'
})
export class OrderTableComponent {
    includeShipped: boolean = false;

    constructor(private orderRepository: OrderRepository) {}

    public getOrders(): Order[] {
        return this.orderRepository.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }

    public markShipped(order: Order) {
        order.shipped = true;
        this.orderRepository.updateOrder(order);
    }

    public delete(id: number): void {
        this.orderRepository.deleteOrder(id);
    }
}