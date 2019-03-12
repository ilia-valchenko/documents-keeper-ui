import { Injectable } from "@angular/core";
import { FieldValue } from "../field-value.model";
import { StaticDataSource } from "../datasources/static.datasource";

@Injectable()
export class FieldValueRepository {
    private fieldValues: FieldValue[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getFieldValues().subscribe(data => {
            this.fieldValues = data;
        });
    }

    public getAllFieldValues(): FieldValue[] {
        return this.fieldValues;
    }

    public getFieldValueById(fieldValueId: string): FieldValue {
        return this.fieldValues.find(fv => fv.id === fieldValueId);
    }

    public getFieldValuesByDocumentIdAndFieldId(documentId: string, fieldId: string) {
        return this.fieldValues.filter(fv => fv.documentId === documentId &&
            fv.fieldId === fieldId);
    }
}