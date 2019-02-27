import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
// import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";
// import { StoreComponent } from "./store/store.component";
// import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
// import { CheckoutComponent } from "./store/checkout/checkout.component";
import { StoreFirstGuard } from "./store-first.guard";
import { DocumentsKeeperModule } from "./documents-keeper/documents-keeper.module";
import { FolderListComponent } from "./documents-keeper/folder-list/folder-list.component";
import { DocumentListComponent } from "./documents-keeper/document-list/document-list.component";
// import { StoreFirstGuard } from "./store-first.guard";

@NgModule({
  imports: [
    BrowserModule,
    //StoreModule,
    DocumentsKeeperModule,
    RouterModule.forRoot([
      // { 
      //   path: 'store',
      //   component: StoreComponent,
      //   canActivate: [StoreFirstGuard]
      // },
      // { 
      //   path: 'cart',
      //   component: CartDetailComponent,
      //   canActivate: [StoreFirstGuard]
      // },
      // { 
      //   path: 'checkout',
      //   component: CheckoutComponent,
      //   canActivate: [StoreFirstGuard]
      // },
      // {
      //   path: 'admin',
      //   loadChildren: 'app/admin/admin.module#AdminModule',
      //   canActivate: [StoreFirstGuard]
      // },
      // { 
      //   path: '**',
      //   redirectTo: '/store'
      // }

      // ---------- Documents Keeper ------------
      {
        path: 'folders',
        component: FolderListComponent
      },
      {
        path: 'documents',
        component: DocumentListComponent
      },
      {
        path: '**',
        redirectTo: '/folders'
      }
    ])],
  declarations: [AppComponent],
  // providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }