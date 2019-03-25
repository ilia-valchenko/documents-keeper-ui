import { Component } from '@angular/core'
import { DocumentPreviewRepository } from 'app/model/repositories/document-preview.repository';
import { DocumentPreview } from 'app/model/document-preview.model';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from './file-upload.service';

@Component({
    moduleId: module.id,
    templateUrl: 'document-preview-list.component.html'
})
export class DocumentPreviewListComponent {
    private folderId: string;

    constructor(
        private readonly documentPreviewRepository: DocumentPreviewRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly fileUploadService: FileUploadService) {
            this.folderId = activeRoute.snapshot.params['folderId'];
    }

    public get documents(): DocumentPreview[] {
        return this.documentPreviewRepository.getDocumentsByFolderId(this.folderId);
    }

    public onFilesAdded(files: FileList): void {
        console.log(files);
        this.fileUploadService.postFile(files[0]);
    }
}