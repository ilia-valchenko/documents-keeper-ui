import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/rest.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DocumentPreviewRepository {
    constructor(private readonly dataSource: RestDataSource) { }

    public getDocumentsByFolderId(folderId: string): Observable<Document[]> {
        return this.dataSource.getLiteDocumentsByFolderId(folderId);
    }
}