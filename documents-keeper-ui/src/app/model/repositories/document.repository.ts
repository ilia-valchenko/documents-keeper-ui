import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "../datasources/rest.datasource";
import { Document } from "../document.model";

@Injectable()
export class DocumentRepository {
    constructor(private readonly dataSource: RestDataSource) { }

    public getLiteDocumentsByFolderId(
        folderId: string,
        pageNumber: number): Observable<Document[]> {
        return this.dataSource.getLiteDocumentsByFolderId(folderId, pageNumber);
    }

    public getDocumentById(documentId: string): Observable<Document> {
        return this.dataSource.getDocumentById(documentId);
    }

    public deleteDocument(documentId: string): Observable<any> {
        if (documentId != undefined && documentId !== '') {
            return this.dataSource.deleteDocument(documentId);
        }
    }

    public getSearchResult(query: string): Observable<Document[]> {
        if (query == '') {
            return null;
        }

        return this.dataSource.getSearchResult(query);
    }

    public getDocumentsCount(folderId: string): Observable<number> {
        if (folderId != undefined && folderId !== '') {
            return this.dataSource.getDocumentsCount(folderId);
        }
    }
}