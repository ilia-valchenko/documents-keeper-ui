import { Component } from '@angular/core';
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from 'app/model/folder.model';
import { FieldRepository } from 'app/model/repositories/field.repository';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'folder-configuration.component.html'
})
export class FolderConfigurationComponent {
    private folderId: string;

    public folder: Folder;

    constructor(
        private readonly folderRepository: FolderRepository,
        private readonly fieldRepository: FieldRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router
    ) {
        this.folderId = activeRoute.snapshot.params['folderId'];
        this.folder = folderRepository.getFolderById(this.folderId);
    }

    public save(form: NgForm): void {
        this.folderRepository.saveFolder(this.folder);
        this.router.navigateByUrl('/folders');
    }

    public deleteFolder(): void {
        if(confirm('Do you really want to delete current folder? You lost all of your documents and fields.')) {
            this.folderRepository.deleteFolder(this.folder.id);
            // TODO: Use cascad removind. Remove all documents, fields and field values
            // which belong to this folder.
            this.router.navigateByUrl('/folders');
        }
    }
}