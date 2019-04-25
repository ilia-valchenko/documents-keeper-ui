export const ApiEndpoint = {
    Documents: 'Documents',
    GetDocument: 'Documents/GetDocument',
    GetLiteDocument: 'Documents/GetLiteDocument',
    GetAllDocuments: 'Documents/GetAllDocuments',
    GetLiteDocumentsByFolderId: 'Documents/GetLiteDocumentsByFolderId',
    DeleteDocument: 'Documents/DeleteDocument',

    Folders: 'Folders',
    GetFolderById: 'Folders/GetFolder',
    GetAllFolders: 'Folders/GetAllFolders',
    GetLiteFolderById: 'Folders/GetLiteFolder',
    GetAllLiteFolders: 'Folders/GetAllLiteFolders',
    CreateFolder: 'Folders/CreateFolder',
    DeleteFolder: 'Folders/DeleteFolder',

    Fields: 'Fields',
    GetLiteField: 'Fields/GetLiteField',
    GetLiteFieldsByFolderId: 'Fields/GetLiteFieldsByFolderId',
    CreateField: 'Fields/CreateField',
    DeleteField: 'Fields/DeleteField',

    Upload: 'Upload',
    // UploadSingleFile: 'Upload/UploadSingleFile'
    UploadFile: 'Upload/UploadFile'
}