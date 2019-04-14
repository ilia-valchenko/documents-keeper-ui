import { UrlBuilder } from "../url-builder";
import { ApiEndpoint } from "../constants/api-endpoint";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FileUploadService {
    constructor(
        private readonly urlBuilder: UrlBuilder,
        private readonly httpClient: HttpClient) { }

    // public postFile(fileToUpload: File): void {
    public postFile(files: FileList): void {
        // const formData: FormData = new FormData();
        // formData.append('fileKey', fileToUpload, fileToUpload.name);
        // const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.UploadFile);

        // this.httpClient
        //     .post(endpoint, formData)
        //     .subscribe(
        //         this.handleSuccessfulFileUpload,
        //         this.handleError
        //     );


        const formData: FormData = new FormData();

        for(let i = 0; i < files.length; i++) {
            formData.append('fileKey', files[i]);
        }

        // formData.append('fileKey', fileToUpload, fileToUpload.name);
        const endpoint = this.urlBuilder.buildUrl(ApiEndpoint.UploadFile);

        this.httpClient
            .post(endpoint, formData)
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