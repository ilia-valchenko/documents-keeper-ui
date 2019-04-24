import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UrlBuilder } from 'app/documents-keeper/url-builder';
import { ApiEndpoint } from 'app/documents-keeper/constants/api-endpoint';
import { Field } from '../field.model';
import { Folder } from '../folder.model';
import { Document } from '../document.model';

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
        const params = new HttpParams().set('id', id);
        return this.httpClient.get<Folder>(endpoint, { params: params });
    }

    public getLiteFolderById(folderId: string): Observable<Folder> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.GetLiteFolderById);
        const params = new HttpParams().set('folderId', folderId);
        return this.httpClient.get<Folder>(endpoint, { params: params });
    }

    public createFolder(folder: Folder): Observable<Folder> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.CreateFolder);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.httpClient
            .post<Folder>(endpoint, { FolderName: folder.Name }, httpOptions);
    }

    public deleteFolder(folderId: string): Observable<any> {
        const endpoint = this.urlBuilder
            .buildUrl(ApiEndpoint.DeleteFolder + '/' + folderId);

        return this.httpClient.delete(endpoint);
    }

    public getLiteDocumentsByFolderId(folderId: string): Observable<Document[]> {
        const endpoint = this.urlBuilder.buildUrl(
            ApiEndpoint.GetLiteDocumentsByFolderId);

        const params = new HttpParams().set('folderId', folderId);

        return this.httpClient.get<Document[]>(endpoint, { params: params });
    }

    public getDocumentById(documentId: string): Observable<Document> {
        const endpoint = this.urlBuilder.buildUrl(
            ApiEndpoint.GetDocument + '/' + documentId);

        return this.httpClient.get<Document>(endpoint);

        // const params = new HttpParams().set('id', documentId);
        // return this.httpClient.get<Document>(endpoint, { params: params });
    }

    public getLiteFieldsByFolderId(folderId: string): Observable<Field[]> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.GetLiteFieldsByFolderId);
        const params = new HttpParams().set('folderId', folderId);
        return this.httpClient.get<Field[]>(endpoint, { params: params });
    }

    public createField(field: Field): Observable<Field> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.CreateField);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.httpClient.post<Field>(endpoint, field, httpOptions);
    }

    public removeField(fieldId: number): Observable<any> {
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.DeleteField + '/' + fieldId);

        return this.httpClient.delete(endpoint);
    }
}