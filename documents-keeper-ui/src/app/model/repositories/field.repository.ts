import { Injectable } from "@angular/core";
import { StaticDataSource } from "../datasources/static.datasource";
import { Field } from "../field.model";

@Injectable()
export class FieldRepository {
    private fields: Field[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getFields().subscribe(data => {
            this.fields = data;
        });
    }

    public getAllFields(): Field[] {
        return this.fields;
    }

    public getFieldById(fieldId: string): Field {
        return this.fields.find(f => f.id == fieldId);
    }

    public getFieldsByFolderId(folderId: string): Field[] {
        return this.fields.filter(f => f.folder.id === folderId);
    }
}