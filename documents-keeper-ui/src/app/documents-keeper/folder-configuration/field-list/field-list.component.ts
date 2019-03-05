import { Component } from '@angular/core';
import { Field } from 'app/model/field.model';
import { FieldRepository } from 'app/model/repositories/field.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'field-list.component.html'
})
export class FieldListComponent {
    public folderId: string;

    constructor(
        private readonly fieldRepository: FieldRepository,
        private readonly activeRoute: ActivatedRoute) {
            this.folderId = activeRoute.snapshot.params['folderId'];
    }

    public get fields(): Field[] {
        return this.fieldRepository.getFieldsByFolderId(this.folderId);
    }
}