import { Component, OnInit } from '@angular/core'
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { Folder } from 'app/model/folder.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-list.component.html',
    styleUrls: ['folder-list.component.scss']
})
export class FolderListComponent implements OnInit {
    public liteFolders: Observable<Folder[]>;

    public ngOnInit(): void {
        this.liteFolders = this.folderRepository.getAllLiteFolders();
    }

    public constructor(
        private readonly folderRepository: FolderRepository,
        private readonly router: Router) { }

    public deleteFolder(folderId: string): void {
        if(confirm('Do you really want to delete current folder? You lost all of your documents and fields.')) {
            this.folderRepository.deleteFolder(folderId).subscribe();
        }
    }
}