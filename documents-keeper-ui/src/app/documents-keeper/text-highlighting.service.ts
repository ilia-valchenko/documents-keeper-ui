import { Injectable } from "@angular/core";

@Injectable()
export class TextHighlightingService {
    // private readonly replacementStart: string = '&lt;em&gt;';
    // private readonly replacementEnd: string = '&lt;/em&gt';

    private readonly replacementStart: string = '<em>';
    private readonly replacementEnd: string = '</em>';

    public getHighlightedText(sourceText: string, searchPhrase: string): string {
        const replacement = this.createReplacement(searchPhrase);
        return sourceText.replace(new RegExp(searchPhrase, 'g'), replacement);
    }

    private createReplacement(phrase: string): string {
        return this.replacementStart + phrase + this.replacementEnd;
    }
}