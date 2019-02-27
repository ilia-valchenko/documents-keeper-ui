import { Injectable } from "@angular/core";
import { StaticDataSource } from "../static.datasource";
import { Document } from "./document.model";

@Injectable()
export class DocumentRepository {
    private documents: Document[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getDocuments().subscribe(data => {
            this.documents = data;
        });
    }

    public getAllDocuments(): Document[] {
        return this.documents;
    }

    public getDocumentsByFolderId(folderId: string): Document[] {
        return this.documents.filter(d => d.folder.id === folderId);
    }

    public getDocumentById(id: string): Document {
        return this.documents.find(d => d.id === id);
    }
}