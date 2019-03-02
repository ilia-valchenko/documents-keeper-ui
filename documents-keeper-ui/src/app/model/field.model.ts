import { Folder } from "./folder.model";
import { FieldValue } from "./field-value.model";
import { FieldDataType } from "app/documents-keeper/enums/field-data-types";

export class Field {
    public id: string;
    public name: string;
    public displayName: string;
    public dataType: FieldDataType;
    public isMultipleValue: boolean;
    public folder: Folder;
    public fieldValues: FieldValue[];
}