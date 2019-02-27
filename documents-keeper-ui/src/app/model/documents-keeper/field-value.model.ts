import { Field } from "./field.model";

export class FieldValue {
    public id: string;
    public document: Document;
    public field: Field;
    public textValue: string;
    public numericValue: number;
    public booleanValue: boolean;
    public dateTimeValue: Date;
}