import { Component } from '@angular/core'
import { DocumentPreviewRepository } from 'app/model/repositories/document-preview.repository';
import { DocumentPreview } from 'app/model/document-preview.model';

@Component({
    moduleId: module.id,
    templateUrl: 'document-list.component.html'
})
export class DocumentPreviewListComponent {
    constructor(private readonly documentPreviewRepository: DocumentPreviewRepository) {}

    get documents(): DocumentPreview[] {
        return this.documentPreviewRepository.getAllDocuments();
    }
}