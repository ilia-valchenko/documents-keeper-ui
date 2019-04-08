import { Injectable } from "@angular/core";
import { Folder } from "../folder.model";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "../datasources/rest.datasource";

@Injectable()
export class FolderRepository {
    public constructor(private readonly dataSource: RestDataSource) { }

    public getAllLiteFolders(): Observable<Folder[]> {
        return this.dataSource.getAllLiteFolders();
    }

    public getFolderById(id: string): Observable<Folder> {
        return this.dataSource.getFolderById(id);
    }

    public getLiteFolderById(folderId: string): Observable<Folder> {
        return this.dataSource.getLiteFolderById(folderId);
    }

    public saveFolder(folder: Folder): void {
        // TODO: Use lodash here.
        if (folder.Id == undefined || folder.Id === '') {
            this.dataSource.createFolder(folder);
        } else {
            // this.dataSource.updateFolder(folder);
        }
    }

    public deleteFolder(folderId: string): void {
        if (folderId != undefined && folderId !== '') {
            this.dataSource.deleteFolder(folderId);
        }
    }
}