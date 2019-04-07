import { FieldDataType } from "app/documents-keeper/enums/field-data-types";

export class Field {
    public Id: string;
    public Name: string;
    public DisplayName: string;
    public DataType: FieldDataType;
    public IsMultipleValue: boolean;
    public FolderId: string;
}