import { Injectable } from "@angular/core";
import { Field } from "../field.model";
import { RestDataSource } from "../datasources/rest.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FieldRepository {
    constructor(private dataSource: RestDataSource) { }

    // public getAllFields(): Field[] {
    //     return this.fields;
    // }

    // public getFieldById(fieldId: string): Field {
    //     return this.fields.find(f => f.id == fieldId);
    // }

    public getFieldsByFolderId(folderId: string): Observable<Field[]> {
        return this.dataSource.getLiteFieldsByFolderId(folderId);
    }

    public save(field: Field): void {
        // if(field.id == null || field.id === '') {
        //     this.dataSource.saveField(field);
        // } else {
        //     this.dataSource.updateField(field);
        // }
    }
}