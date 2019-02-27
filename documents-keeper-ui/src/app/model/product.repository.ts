import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProducts().subscribe(data => {
        this.products = data;
        this.categories = data.map(p => p.category)
            .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    public getProducts(category: string = null): Product[] {
        return this.products.filter(p => category == null || category == p.category);
    }

    public getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    public getCategories(): string[] {
        return this.categories;
    }

    public saveProduct(product: Product) {
        if(product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                .subscribe(p => this.products.push(p));
        } else {
            this.dataSource.updateProduct(product);
        }
    }

    public deleteProduct(id: number): void {
        this.dataSource.deleteProduct(id)
            .subscribe(deletedProduct => {
                this.products.splice(this.products.findIndex(p => p.id === deletedProduct.id), 1);
            })
    }
}