import { Injectable } from "@angular/core";
import { HttpClient,  HttpParams } from "@angular/common/http";
import { UrlBuilder } from "../url-builder";
import { ApiEndpoint } from "../constants/api-endpoint";

@Injectable()
export class FileUploadService {
    constructor(
        private readonly urlBuilder: UrlBuilder,
        private readonly httpClient: HttpClient) { }

    public postFiles(folderId: string, files: FileList): void {
        const formData: FormData = new FormData();

        for(let i = 0; i < files.length; i++) {
            formData.append('fileKey', files[i]);
        }

        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.UploadFile);
        const params = new HttpParams().set('folderId', folderId);

        this.httpClient
            .post(endpoint, formData, { params: params })
            .subscribe(
                this.handleSuccessfulFileUpload,
                this.handleError
            );
    }

    private handleError(error: any): void {
        console.log('Error occured while sending file:', error);
    }

    private handleSuccessfulFileUpload() {
        console.log('File was successfully uploaded on the server.');
    }
}