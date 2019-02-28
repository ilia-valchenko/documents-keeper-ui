import { Component } from '@angular/core'
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { Folder } from 'app/model/folder.model';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-list.component.html'
})
export class FolderListComponent {
    constructor(private readonly folderRepository: FolderRepository) {}

    get folders(): Folder[] {
        return this.folderRepository.getAllFolders();
    }
}