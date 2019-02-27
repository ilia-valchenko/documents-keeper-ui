import { Injectable } from "@angular/core";
import { StaticDataSource } from "../static.datasource";
import { Folder } from "./folder.model";

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
}