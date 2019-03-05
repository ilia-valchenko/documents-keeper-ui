import { Component } from '@angular/core'
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { Folder } from 'app/model/folder.model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-list.component.html'
})
export class FolderListComponent {
    constructor(
        private readonly folderRepository: FolderRepository,
        private readonly router: Router) {}

    get folders(): Folder[] {
        return this.folderRepository.getAllFolders();
    }

    public deleteFolder(folderId: string): void {
        if(confirm('Do you really want to delete current folder? You lost all of your documents and fields.')) {
            this.folderRepository.deleteFolder(folderId);
            this.router.navigateByUrl('/folders');
        }
    }
}