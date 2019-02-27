import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.model";
import { HttpModule } from "@angular/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { FolderRepository } from "./documents-keeper/folder.repository";
import { DocumentRepository } from "./documents-keeper/document.repository";
import { Folder } from "./documents-keeper/folder.model";
import { Document } from './documents-keeper/document.model';

@NgModule({
    imports: [HttpModule],
    // providers: [
    //     ProductRepository,
    //     {
    //         provide: StaticDataSource,
    //         useClass: RestDataSource
    //     },
    //     Cart,
    //     Order,
    //     OrderRepository,
    //     RestDataSource,
    //     AuthService
    // ]

    providers: [
        FolderRepository,
        StaticDataSource,
        DocumentRepository,
        Folder,
        Document
    ]
})
export class ModelModule { }