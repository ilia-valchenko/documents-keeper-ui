import { Field } from "./field.model";

export class Folder {
    public id: string;
    public name: string;
    public documents: Document[];
    public fields: Field[];
    public createdDate: Date;
    public lastModified: Date;
}