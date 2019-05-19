import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import {NgxPaginationModule} from 'ngx-pagination';
import { FolderListComponent } from "./folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./document-list/document-preview-list.component";
import { FolderConfigurationComponent } from "./folder-configuration/folder-configuration.component";
import { FolderNameEditorComponent } from "./folder-configuration/folder-name-editor/folder-name-editor.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FieldListComponent } from "./folder-configuration/field-list/field-list.component";
import { CreateFieldComponent } from "./folder-configuration/create-field/create-field.component";
import { DocumentDetailsComponent } from "./document-details/document-details.component";
import { UrlBuilder } from "./url-builder";
import { FileUploadService } from "./document-list/file-upload.service";
import { CreateFolderComponent } from "./create-folder/create-folder.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { TextHighlightingService } from "./text-highlighting.service";
import { HighlightedDocumentComponent } from "./highlighted-document/highlighted-document.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AngularFontAwesomeModule,
        NgxPaginationModule
    ],
    declarations: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent,
        FolderNameEditorComponent,
        FieldListComponent,
        CreateFieldComponent,
        DocumentDetailsComponent,
        CreateFolderComponent,
        SearchResultComponent,
        HighlightedDocumentComponent
    ],
    exports: [
        FolderListComponent,
        DocumentPreviewListComponent,
        FolderConfigurationComponent,
        FolderNameEditorComponent,
        FieldListComponent,
        CreateFieldComponent,
        DocumentDetailsComponent
    ],
    providers: [
        UrlBuilder,
        FileUploadService,
        TextHighlightingService
    ]
})
export class DocumentsKeeperModule { }