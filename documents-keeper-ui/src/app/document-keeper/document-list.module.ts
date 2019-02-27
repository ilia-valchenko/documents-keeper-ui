import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { DocumentListComponent } from "./document-list/document-list.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        DocumentListComponent
    ],
    exports: [
        DocumentListComponent
    ]
})
export class DocumentsKeeperModule {}