import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FolderRepository } from "./repositories/folder.repository";
import { DocumentPreviewRepository } from "./repositories/document-preview.repository";
import { Folder } from "./folder.model";
import { DocumentPreview } from './document-preview.model';
import { FieldRepository } from "./repositories/field.repository";
import { RestDataSource } from "./datasources/rest.datasource";

@NgModule({
    imports: [HttpModule],
    providers: [
        RestDataSource,
        FolderRepository,
        DocumentPreviewRepository,
        FieldRepository,
        Folder,
        DocumentPreview
    ]
})
export class ModelModule { }