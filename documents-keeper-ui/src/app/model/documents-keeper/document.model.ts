import { Folder } from "./folder.model";

export class Document {
    public id: string;
    public documentNumber: number;
    // TODO: Use enum here.
    public fileType: string;
    public folder: Folder;
    public textNasPath: string;
    public fileSize: number;
    public familyId: number;
    public uploadId: number;
}