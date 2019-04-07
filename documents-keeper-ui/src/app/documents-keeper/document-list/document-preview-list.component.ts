import { Component, OnInit } from '@angular/core'
import { DocumentPreviewRepository } from 'app/model/repositories/document-preview.repository';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from './file-upload.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'document-preview-list.component.html'
})
export class DocumentPreviewListComponent implements OnInit {
    private folderId: string;

    public documents: Observable<Document[]>;

    public ngOnInit(): void {
        this.documents = this.documentPreviewRepository
            .getDocumentsByFolderId(this.folderId);
    }

    constructor(
        private readonly documentPreviewRepository: DocumentPreviewRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly fileUploadService: FileUploadService) {
        this.folderId = activeRoute.snapshot.params['folderId'];
    }

    public onFilesAdded(files: FileList): void {
        console.log(files);
        this.fileUploadService.postFile(files[0]);
    }
}