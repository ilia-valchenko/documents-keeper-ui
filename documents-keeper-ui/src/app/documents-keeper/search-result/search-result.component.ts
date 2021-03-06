import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DocumentRepository } from "app/model/repositories/document.repository";
import { Document } from "app/model/document.model";

@Component({
    moduleId: module.id,
    templateUrl: 'search-result.component.html'
})
export class SearchResultComponent implements OnInit {
    public readonly searchQuery: string;
    public documents: Observable<Document[]>;

    ngOnInit(): void {
        this.documents = this.documentRepository
            .getSearchResult(this.searchQuery);
    }

    public constructor(
        private readonly documentRepository: DocumentRepository,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.searchQuery = this.activatedRoute.snapshot.queryParams.query;
    }

    public navigateToHighlightedDocument(documentId: string): void {
        this.router.navigate(
            ['/highlighteddocument', documentId],
            { queryParams: { query: this.searchQuery }});
    }
}