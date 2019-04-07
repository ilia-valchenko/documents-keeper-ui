import { Component } from '@angular/core';
import { Field } from 'app/model/field.model';
import { FieldRepository } from 'app/model/repositories/field.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'create-field.component.html'
})
export class CreateFieldComponent {
    public field: Field = new Field();
    private folderId: string;

    constructor(
        private readonly fieldRepository: FieldRepository,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router) {
            this.folderId = this.activeRoute.snapshot.params['folderId'];
    }

    public save(form: NgForm): void {
        this.field.FolderId = this.folderId;
        this.fieldRepository.save(this.field);
        this.router.navigateByUrl('folders/' + this.folderId + '/configuration/fields');
    }
}