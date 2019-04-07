import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UrlBuilder } from 'app/documents-keeper/url-builder';
import { ApiEndpoint } from 'app/documents-keeper/api-endpoint';
import { Field } from '../field.model';
import { Folder } from '../folder.model';

@Injectable()
export class RestDataSource {
    public constructor(
        private readonly urlBuilder: UrlBuilder,
        private readonly httpClient: HttpClient) {}

    public getAllLiteFolders(): Observable<Folder[]> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.GetAllLiteFolders);
        return this.httpClient.get<Folder[]>(endpoint);
    }

    public getFolderById(id: string): Observable<Folder> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.GetFolderById);
        return this.httpClient.get<Folder>(endpoint);
    }

    public createFolder(folder: Folder): void {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.Folders);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        this.httpClient
            .post(endpoint, { FolderName: folder.Name }, httpOptions);
    }

    public deleteFolder(folderId: string): void {
        // TODO: Implement it.
        console.log("Not implemented. Try to delete folder:", folderId);
    }

    public getLiteDocumentsByFolderId(folderId: string): Observable<Document[]> {
        const endpoint = this.urlBuilder.buildUrl(
            ApiEndpoint.GetLiteDocumentsByFolderId);

        let params = new HttpParams().set('folderId', folderId);

        return this.httpClient.get<Document[]>(endpoint, { params: params });
    }

    public getLiteFieldsByFolderId(folderId: string): Observable<Field[]> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.GetLiteFieldsByFolderId);
        const param: any = { 'folderId': folderId };
        return this.httpClient.get<Field[]>(endpoint, { params: param });
    }
}