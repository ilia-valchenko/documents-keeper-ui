import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { FolderListComponent } from "./folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./document-list/document-preview-list.component";
import { FolderConfigurationComponent } from "./folder-configuration/folder-configuration.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent
    ],
    exports: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent
    ]
})
export class DocumentsKeeperModule { }