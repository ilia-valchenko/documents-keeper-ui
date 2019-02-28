import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { DocumentsKeeperModule } from "./documents-keeper/documents-keeper.module";
import { FolderListComponent } from "./documents-keeper/folder-list/folder-list.component";
import { DocumentPreviewListComponent } from "./documents-keeper/document-list/document-preview-list.component";

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
        path: 'documents',
        component: DocumentPreviewListComponent
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