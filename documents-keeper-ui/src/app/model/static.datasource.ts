import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";
import { Folder } from "./documents-keeper/folder.model";
import { Document } from './documents-keeper/document.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    private folders: Folder[] = [
        {
            id: '256baad318bd4d36b265fd2c3aa37df1',
            name: 'folderName',
            createdDate: new Date('5/1/2018 1:04:50 PM'),
            lastModified: new Date('5/1/2018 1:04:50 PM')
        } as Folder,
        {
            id: '763f247a0d4145598c068019c3e350ae',
            name: 'FirstFolder',
            createdDate: new Date('4/29/2018 11:12:10 PM'),
            lastModified: new Date('4/29/2018 11:12:10 PM')
        } as Folder,
        {
            id: '9e79faf821364dba871cb43b5f20859a',
            name: 'TestFolder2',
            createdDate: new Date('5/1/2018 1:05:13 PM'),
            lastModified: new Date('5/1/2018 1:05:13 PM')
        } as Folder,
        {
            id: 'ed6a5a7efa214c07964c7d1d5b31475c',
            name: 'folderName',
            createdDate: new Date('5/1/2018 1:12:03 AM'),
            lastModified: new Date('5/1/2018 1:12:03 AM')
        } as Folder
    ];

    private documents: Document[] = [
        {
            id: '554858d9f2314c02b2ea984a17063ac3',
            documentNumber: 1,
            fileType: 'text/plain',
            textNasPath: 'Empty_text_nas_path',
            fileSize: 57.14000000,
            familyId: 1,
            uploadId: 1,
            folder: this.folders[1]
        } as Document,
        {
            id: 'b825ef9637a54c69a371d2a209623ce3',
            documentNumber: 2,
            fileType: 'text/plain',
            textNasPath: 'Empty_text_nas_path',
            fileSize: 25.23000000,
            familyId: 1,
            uploadId: 1,
            folder: this.folders[1]
        } as Document
    ];

    public getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    public saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return Observable.from([order]);
    }

    public getFolders(): Observable<Folder[]> {
        return Observable.from([this.folders]);
    }

    public getDocuments(): Observable<Document[]> {
        return Observable.from([this.documents]);
    }
}