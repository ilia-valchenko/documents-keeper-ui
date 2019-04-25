import { Component, OnInit } from '@angular/core'
import { DocumentRepository } from 'app/model/repositories/document.repository';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from './file-upload.service';
import { Observable } from 'rxjs/Observable';
import { Document } from 'app/model/document.model';

@Component({
    moduleId: module.id,
    templateUrl: 'document-preview-list.component.html'
})
export class DocumentPreviewListComponent implements OnInit {
    private folderId: string;

    public liteDocuments: Observable<Document[]>;

    public ngOnInit(): void {
        this.liteDocuments = this.documentRepository
            .getLiteDocumentsByFolderId(this.folderId);
    }

    constructor(
        private readonly documentRepository: DocumentRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly fileUploadService: FileUploadService) {
        this.folderId = activeRoute.snapshot.params['folderId'];
    }

    public onFilesAdded(files: FileList): void {
        console.log(files);
        this.fileUploadService.postFiles(this.folderId, files);
    }

    public deleteDocument(documentId: string): void {
        if (confirm('Do you really want to delete selected document?')) {
            this.documentRepository.deleteDocument(documentId).subscribe();
        }
    }
}