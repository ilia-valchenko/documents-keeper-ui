import { Component, OnInit } from "@angular/core";
import { Document } from 'app/model/document.model';
import { DocumentRepository } from "app/model/repositories/document.repository";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'document-details.component.html',
    styleUrls: ['document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
    private documentId: string;

    public documentText: string = '';

    ngOnInit(): void {
        this.documentId = this.activeRoute.snapshot.params['documentId'];

        this.documentRepository.getDocumentById(this.documentId)
            .subscribe(data => {
                this.documentText = data.DocumentText;
            });
    }

    constructor(
        private readonly documentRepository: DocumentRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router) { }
}