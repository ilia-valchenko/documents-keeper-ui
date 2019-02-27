import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { Order } from './order.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 56238;

@Injectable()
export class RestDataSource {
    private baseUrl: string;
    public auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    public getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, 'products') as Observable<Product[]>;
    }

    public saveProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Post, 'products', product) as Observable<Product>;
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product) as Observable<Product>;
    }

    public deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete, `products/${id}`, null) as Observable<Product>;
    }

    public getOrders(): Observable<Order[]> {
        return this.sendRequest(RequestMethod.Get, 'orders', null) as Observable<Order[]>;
    }

    public deleteOrder(id: number): Observable<Order> {
        return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null) as Observable<Order>;
    }

    public updateOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Put, `orders/${order.id}`, order) as Observable<Order>;
    }

    public saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, 'orders', order) as Observable<Order>;
    }

    private sendRequest(
        verb: RequestMethod,
        url: string,
        body?: Product | Order): Observable<Product | Product[] | Order | Order[]> {
            let request = new Request({
                method: verb,
                url: this.baseUrl + url,
                body: body
            });

            return this.http.request(request).map(response => response.json());
        }
}