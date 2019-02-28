import { Injectable } from "@angular/core";
import { StaticDataSource } from "../datasources/static.datasource";
import { DocumentPreview } from "../document-preview.model";

@Injectable()
export class DocumentPreviewRepository {
    private documents: DocumentPreview[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getDocuments().subscribe(data => {
            this.documents = data;
        });
    }

    public getAllDocuments(): DocumentPreview[] {
        return this.documents;
    }

    public getDocumentsByFolderId(folderId: string): DocumentPreview[] {
        return this.documents.filter(d => d.folder.id === folderId);
    }

    public getDocumentById(id: string): DocumentPreview {
        return this.documents.find(d => d.id === id);
    }
}