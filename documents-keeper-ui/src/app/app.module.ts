import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { DocumentsKeeperModule } from "./documents-keeper/documents-keeper.module";
import { FolderListComponent } from "./documents-keeper/folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./documents-keeper/document-list/document-preview-list.component";
import { FolderConfigurationComponent } from "./documents-keeper/folder-configuration/folder-configuration.component";

@NgModule({
  imports: [
    BrowserModule,
    DocumentsKeeperModule,
    RouterModule.forRoot([
      {
        path: 'folders',
        component: FolderListComponent
      },
      {
        path: 'folders/:folderId/documents',
        component: DocumentPreviewListComponent
      },
      {
        path: 'folders/:folderId/configuration',
        component: FolderConfigurationComponent
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