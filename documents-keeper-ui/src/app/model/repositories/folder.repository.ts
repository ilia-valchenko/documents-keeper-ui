import { Injectable } from "@angular/core";
import { StaticDataSource } from "../datasources/static.datasource";
import { Folder } from "../folder.model";

@Injectable()
export class FolderRepository {
    private folders: Folder[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getFolders().subscribe(data => {
            this.folders = data;
        });
    }

    public getAllFolders(): Folder[] {
        return this.folders;
    }

    public getFolderById(id: string): Folder {
        return this.folders.find(f => f.id == id);
    }

    public saveFolder(folder: Folder): void {
        // TODO: Use lodash here. 
        if(folder.id == undefined || folder.id === '') {
            // this.dataSource.saveFolder(folder)
            //     .subscribe(p => this.folders.push(folder));
        } else {
            this.dataSource.updateFolder(folder);
        }
    }

    public deleteFolder(folderId: string): void {
        if(folderId != undefined && folderId !== '') {
            this.dataSource.deleteFolder(folderId);
        }
    }
}