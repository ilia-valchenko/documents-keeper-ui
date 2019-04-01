import { Injectable } from "@angular/core";

@Injectable()
export class UrlBuilder {
    private readonly domain = 'http://localhost:56238/api/v1'

    // TODO: ApiEndpoint type should be used instead of string.
    public buildUrl(endpoint: string): string {
        return `${this.domain}/${endpoint}`;
    }
}