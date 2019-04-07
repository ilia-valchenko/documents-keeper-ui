import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Folder } from "../../model/folder.model";
import { FolderRepository } from "../../model/repositories/folder.repository";

@Component({
    moduleId: module.id,
    templateUrl: 'create-folder.component.html'
})
export class CreateFolderComponent {
    private newFolder: Folder = new Folder();

    public constructor(
        private readonly folderRepository: FolderRepository,
        private readonly router: Router) {}
    
    public save(form: NgForm): void {
        this.folderRepository.saveFolder(this.newFolder);
        this.router.navigateByUrl('/folders');
    }
}