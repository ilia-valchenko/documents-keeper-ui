import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/rest.datasource";
import { Observable } from "rxjs/Observable";
import { Document } from "../document.model";

@Injectable()
export class DocumentRepository {
    constructor(private readonly dataSource: RestDataSource) { }

    public getLiteDocumentsByFolderId(folderId: string): Observable<Document[]> {
        return this.dataSource.getLiteDocumentsByFolderId(folderId);
    }

    public getDocumentById(documentId: string): Observable<Document> {
        return this.dataSource.getDocumentById(documentId);
    }

    public deleteDocument(documentId: string): Observable<any> {
        if (documentId != undefined && documentId !== '') {
            return this.dataSource.deleteDocument(documentId);
        }
    }
}