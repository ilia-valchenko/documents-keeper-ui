import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { FolderListComponent } from "./folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./document-list/document-preview-list.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        FolderListComponent,
        DocumentPreviewListComponent
    ],
    exports: [
        FolderListComponent,
        DocumentPreviewListComponent
    ]
})
export class DocumentsKeeperModule { }