import { Component, OnInit } from "@angular/core";
import { Document } from 'app/model/document.model';
import { DocumentRepository } from "app/model/repositories/document.repository";
import { ActivatedRoute } from "@angular/router";
import { TextHighlightingService } from "../text-highlighting.service";

@Component({
    moduleId: module.id,
    templateUrl: 'highlighted-document.component.html',
    styleUrls: ['highlighted-document.component.scss']
})
export class HighlightedDocumentComponent implements OnInit {
    private document: Document;
    private documentId: string;
    private searchQuery: string;

    public documentTextWithHighlighting: string;

    ngOnInit(): void {
        if (this.documentId == '') {
            return;
        }

        this.documentRepository.getDocumentById(this.documentId)
            .subscribe(data => {
                this.documentTextWithHighlighting =
                    this.textHighlightingService
                        .getHighlightedText(data.DocumentText, this.searchQuery);
            });
    }

    public constructor(
        private readonly documentRepository: DocumentRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly activatedRoute: ActivatedRoute,
        private textHighlightingService: TextHighlightingService) {
            this.documentId = activeRoute.snapshot.params['documentId'];
            this.searchQuery = this.activatedRoute.snapshot.queryParams.query;
        }
}