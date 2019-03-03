import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { FolderListComponent } from "./folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./document-list/document-preview-list.component";
import { FolderConfigurationComponent } from "./folder-configuration/folder-configuration.component";
import { FolderNameEditorComponent } from "./folder-configuration/folder-name-editor/folder-name-editor.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent,
        FolderNameEditorComponent
    ],
    exports: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent,
        FolderNameEditorComponent
    ]
})
export class DocumentsKeeperModule { }