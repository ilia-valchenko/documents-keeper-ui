import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { DocumentPreview } from "../document-preview.model";
import { Folder } from "../folder.model";

@Injectable()
export class StaticDataSource {
    private folders: Folder[] = [
        {
            id: '256baad318bd4d36b265fd2c3aa37df1',
            name: 'folderName',
            createdDate: new Date('5/1/2018 1:04:50 PM'),
            lastModified: new Date('5/1/2018 1:04:50 PM')
        } as Folder,
        {
            id: '763f247a0d4145598c068019c3e350ae',
            name: 'FirstFolder',
            createdDate: new Date('4/29/2018 11:12:10 PM'),
            lastModified: new Date('4/29/2018 11:12:10 PM')
        } as Folder,
        {
            id: '9e79faf821364dba871cb43b5f20859a',
            name: 'TestFolder2',
            createdDate: new Date('5/1/2018 1:05:13 PM'),
            lastModified: new Date('5/1/2018 1:05:13 PM')
        } as Folder,
        {
            id: 'ed6a5a7efa214c07964c7d1d5b31475c',
            name: 'folderName',
            createdDate: new Date('5/1/2018 1:12:03 AM'),
            lastModified: new Date('5/1/2018 1:12:03 AM')
        } as Folder
    ];

    private documents: DocumentPreview[] = [
        {
            id: '554858d9f2314c02b2ea984a17063ac3',
            documentNumber: 1,
            fileType: 'text/plain',
            textNasPath: 'Empty_text_nas_path',
            fileSize: 57.14000000,
            familyId: 1,
            uploadId: 1,
            folder: this.folders[1]
        } as DocumentPreview,
        {
            id: 'b825ef9637a54c69a371d2a209623ce3',
            documentNumber: 2,
            fileType: 'text/plain',
            textNasPath: 'Empty_text_nas_path',
            fileSize: 25.23000000,
            familyId: 1,
            uploadId: 1,
            folder: this.folders[1]
        } as DocumentPreview
    ];

    public getFolders(): Observable<Folder[]> {
        return Observable.from([this.folders]);
    }

    public getDocuments(): Observable<DocumentPreview[]> {
        return Observable.from([this.documents]);
    }
}