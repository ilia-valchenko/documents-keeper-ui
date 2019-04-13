import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Field } from 'app/model/field.model';
import { FieldRepository } from 'app/model/repositories/field.repository';
import { FolderRepository } from 'app/model/repositories/folder.repository';
import { Folder } from 'app/model/folder.model';

@Component({
    moduleId: module.id,
    templateUrl: 'field-list.component.html',
    styleUrls: ['field-list.component.scss']
})
export class FieldListComponent implements OnInit {
    public folderId: string;
    public fields: Observable<Field[]>;
    public folder: Observable<Folder>;

    public ngOnInit(): void {
        this.fields = this.fieldRepository.getFieldsByFolderId(this.folderId);
        this.folder = this.folderRepository.getLiteFolderById(this.folderId);
    }

    constructor(
        private readonly fieldRepository: FieldRepository,
        private readonly folderRepository: FolderRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router) {
            this.folderId = activeRoute.snapshot.params['folderId'];
    }

    public removeField(fieldId: number) {
        if(confirm('Do you really want to delete field? You will lost all of your field values.'))
        {
            this.fieldRepository.removeField(fieldId)
                .subscribe(data => {
                    this.router
                        .navigateByUrl(`/folders/${this.folderId}/configuration/fields`);
            });
        }
    }
}