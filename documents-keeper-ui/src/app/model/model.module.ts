import { NgModule } from "@angular/core";
import { StaticDataSource } from "./datasources/static.datasource";
import { HttpModule } from "@angular/http";
import { FolderRepository } from "./repositories/folder.repository";
import { DocumentPreviewRepository } from "./repositories/document-preview.repository";
import { Folder } from "./folder.model";
import { DocumentPreview } from './document-preview.model';
import { FieldRepository } from "./repositories/field.repository";

@NgModule({
    imports: [HttpModule],
    providers: [
        StaticDataSource,
        FolderRepository,
        DocumentPreviewRepository,
        FieldRepository,
        Folder,
        DocumentPreview
    ]
})
export class ModelModule { }