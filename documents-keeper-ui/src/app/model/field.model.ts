import { Folder } from "./folder.model";
import { FieldValue } from "./field-value.model";

export class Field {
    public id: string;
    public name: string;
    public displayName: string;
    // TODO: Use enum here.
    public dataType: number;
    public isMultipleValue: boolean;
    public folder: Folder;
    public fieldValues: FieldValue[];
}