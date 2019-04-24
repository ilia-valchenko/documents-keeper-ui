import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FolderRepository } from "./repositories/folder.repository";
import { DocumentRepository } from "./repositories/document.repository";
import { FieldRepository } from "./repositories/field.repository";
import { RestDataSource } from "./datasources/rest.datasource";

@NgModule({
    imports: [HttpModule],
    providers: [
        RestDataSource,
        FolderRepository,
        DocumentRepository,
        FieldRepository
    ]
})
export class ModelModule { }