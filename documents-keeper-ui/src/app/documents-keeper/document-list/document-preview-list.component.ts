import { Component } from '@angular/core'
import { DocumentPreviewRepository } from 'app/model/repositories/document-preview.repository';
import { DocumentPreview } from 'app/model/document-preview.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'document-list.component.html'
})
export class DocumentPreviewListComponent {
    private folderId: string;

    constructor(
        private readonly documentPreviewRepository: DocumentPreviewRepository,
        private readonly activeRoute: ActivatedRoute) {
            this.folderId = activeRoute.snapshot.params['folderId'];
    }

    get documents(): DocumentPreview[] {
        return this.documentPreviewRepository.getDocumentsByFolderId(this.folderId);
    }
}