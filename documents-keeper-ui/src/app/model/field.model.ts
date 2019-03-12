import { FieldDataType } from "app/documents-keeper/enums/field-data-types";

export class Field {
    public id: string;
    public name: string;
    public displayName: string;
    public dataType: FieldDataType;
    public isMultipleValue: boolean;
    public folderId: string;
}