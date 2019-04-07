import { Component } from '@angular/core';
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from 'app/model/folder.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-name-editor.component.html'
})
export class FolderNameEditorComponent {
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

    public save(form: NgForm): void {
        // this.folderRepository.saveFolder(this.folder);
        // this.router.navigateByUrl('/folders');
    }
}