import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { DocumentsKeeperModule } from "./documents-keeper/documents-keeper.module";
import { FolderListComponent } from "./documents-keeper/folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./documents-keeper/document-list/document-preview-list.component";
import { FolderConfigurationComponent } from "./documents-keeper/folder-configuration/folder-configuration.component";
import { FolderNameEditorComponent } from "./documents-keeper/folder-configuration/folder-name-editor/folder-name-editor.component";
import { FieldListComponent } from "./documents-keeper/folder-configuration/field-list/field-list.component";
import { CreateFieldComponent } from "./documents-keeper/folder-configuration/create-field/create-field.component";
import { DocumentDetailsComponent } from "./documents-keeper/document-details/document-details.component";
import { CreateFolderComponent } from "./documents-keeper/create-folder/create-folder.component";

@NgModule({
  imports: [
    BrowserModule,
    DocumentsKeeperModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'folders',
        component: FolderListComponent
      },
      {
        path: 'folders/create',
        component: CreateFolderComponent
      },
      {
        path: 'folders/:folderId/documents',
        component: DocumentPreviewListComponent
      },
      {
        path: 'folders/:folderId/documents/:documentId/details',
        component: DocumentDetailsComponent
      },
      {
        path: 'folders/:folderId/configuration',
        component: FolderConfigurationComponent
      },
      {
        path: 'folders/:folderId/configuration/edit',
        component: FolderNameEditorComponent
      },
      {
        path: 'folders/:folderId/configuration/fields',
        component: FieldListComponent
      },
      {
        path: 'folders/:folderId/configuration/fields/create',
        component: CreateFieldComponent
      },
      {
        path: '**',
        redirectTo: '/folders'
      }
    ])],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }