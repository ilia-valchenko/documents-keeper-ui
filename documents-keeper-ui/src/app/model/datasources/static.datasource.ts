import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import { DocumentPreview } from "../document-preview.model";
import { Folder } from "../folder.model";
import { Field } from "../field.model";
import { FieldDataType } from "app/documents-keeper/enums/field-data-types";
import { UUID } from 'angular2-uuid';
import { FieldValue } from "../field-value.model";

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
            folderId: this.folders[1].id
        } as DocumentPreview,
        {
            id: 'b825ef9637a54c69a371d2a209623ce3',
            documentNumber: 2,
            fileType: 'text/plain',
            textNasPath: 'Empty_text_nas_path',
            fileSize: 25.23000000,
            familyId: 1,
            uploadId: 1,
            folderId: this.folders[1].id
        } as DocumentPreview
    ];

    private fields: Field[] = [
        {
            id: '274f5f0c589546ddbd2043a0e2c4b0a4',
            name: 'Hot',
            displayName: 'Hot',
            dataType: FieldDataType.boolean,
            isMultipleValue: false,
            folderId: this.folders[1].id,
        } as Field,
        {
            id: 'e5b73c78ef2142e68fac82a4d645c0bf',
            name: 'OwnerName',
            displayName: 'Owner name',
            dataType: FieldDataType.string,
            isMultipleValue: false,
            folderId: this.folders[1].id       
        } as Field,
        {
            id: 'fake-field-id-1',
            name: 'DocumentText',
            displayName: 'Document Text',
            dataType: FieldDataType.string,
            isMultipleValue: false,
            folderId: this.folders[1].id
        } as Field
    ];

    private fieldValues: FieldValue[] = [
        {
            id: 'fake-value-id-1',
            documentId: this.documents[0].id,
            fieldId: this.fields[2].id,
            textValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere tempus porta. Curabitur placerat neque in molestie rutrum. Integer semper ligula a venenatis auctor. Maecenas nec metus porttitor, laoreet orci ac, rutrum diam. Fusce sem lacus, dictum scelerisque euismod eu, aliquet fermentum metus. Vestibulum ac nunc in diam convallis pretium ut a magna. Etiam non luctus nisi, ut finibus tortor. Fusce luctus porttitor enim a eleifend. Sed sapien libero, luctus viverra convallis id, viverra quis arcu. Proin pellentesque consequat elit in fringilla. Donec ut neque diam. Curabitur viverra libero leo, nec iaculis turpis efficitur ac. Maecenas vulputate malesuada lacus, quis ornare purus consectetur ac. Ut ultricies malesuada neque, eget ultricies turpis accumsan non. Nulla aliquet sem id purus pretium bibendum. Fusce egestas, velit sit amet viverra vestibulum, eros risus convallis odio, vitae sagittis tellus eros in nunc. Cras ac elit sit amet nisi mattis tempor sit amet at enim. Aliquam aliquet pharetra massa non efficitur. Donec sagittis, erat ut auctor ullamcorper, quam justo mattis felis, non feugiat ligula magna a leo. In congue non tellus sit amet congue. Aenean iaculis ultrices libero, eu sagittis ligula commodo et. Praesent volutpat eu neque nec aliquet.'
        } as FieldValue,
        {
            id: 'fake-value-id-2',
            documentId: this.documents[1].id,
            fieldId: this.fields[2].id,
            textValue: 'Proin augue sapien, porttitor ut dapibus sed, scelerisque et odio. Etiam vulputate lorem at dolor vestibulum elementum. Vivamus ullamcorper at quam non rhoncus. Vivamus vitae sem a libero finibus suscipit eget eget lacus. Fusce rhoncus libero at mi fringilla, et posuere mi interdum. Ut vitae erat rhoncus justo efficitur ultrices. Vivamus vitae tempus turpis. Fusce et lectus consectetur lacus efficitur ornare. In hac habitasse platea dictumst. Praesent egestas vestibulum ipsum eget fermentum. Nam tempor convallis purus, mattis laoreet metus. Integer tortor ligula, fermentum sit amet convallis vitae, placerat a dolor. Sed maximus dolor tortor. Proin at laoreet arcu. Proin posuere, lectus id viverra dictum, quam turpis mollis enim, at pharetra lacus massa at lorem. Curabitur pulvinar feugiat eros, ac laoreet massa molestie in. Nulla posuere magna vel tortor maximus feugiat. Curabitur tincidunt, turpis ut rhoncus porta, odio lectus consequat lectus, vestibulum interdum augue lorem at lorem. Maecenas nec ipsum ac urna mattis ullamcorper ultrices quis erat. Integer pellentesque elit ut felis egestas, ut ornare velit porttitor. Donec in tempor ligula. Nunc quis justo a urna ultricies faucibus. Nulla facilisi. Phasellus ut ante sodales, accumsan elit vel, eleifend orci. Curabitur mattis vulputate tellus, eu sagittis ex vulputate sed. Morbi vitae viverra urna, et placerat dolor. Sed et leo quam. Integer lobortis magna sed mauris aliquam posuere. Sed porta gravida porttitor. Donec orci orci, commodo et facilisis vitae, auctor sit amet dui. Nullam fringilla sem in purus congue aliquet. Donec volutpat libero ac odio tincidunt, vel dictum diam fermentum.'
        } as FieldValue
    ];

    public getFolders(): Observable<Folder[]> {
        return Observable.from([this.folders]);
    }

    public getDocuments(): Observable<DocumentPreview[]> {
        return Observable.from([this.documents]);
    }

    public getFields(): Observable<Field[]> {
        return Observable.from([this.fields]);
    }

    public getFieldValues(): Observable<FieldValue[]> {
        return Observable.from([this.fieldValues]);
    }

    public updateFolder(updatedFolder: Folder): void {
        let oldFolder = this.folders.find(f => f.id === updatedFolder.id);
        oldFolder = updatedFolder;
    }

    public deleteFolder(folderId: string): void {
        this.folders.splice(
            this.folders.indexOf(this.folders.find(f => f.id === folderId)),
            1);
    }

    public saveField(field: Field): Observable<Field> {
        field.id = UUID.UUID();
        this.fields.push(field);
        return Observable.from([field]);
    }

    public updateField(field: Field): Observable<Field> {
        return Observable.from([field]);
    }
}