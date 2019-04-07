import { Component } from '@angular/core';
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from 'app/model/folder.model';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-configuration.component.html'
})
export class FolderConfigurationComponent {
    private folderId: string;

    public folder: Observable<Folder>;

    constructor(
        private readonly folderRepository: FolderRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router
    ) {
        this.folderId = activeRoute.snapshot.params['folderId'];
        this.folder = folderRepository.getFolderById(this.folderId);
    }
}