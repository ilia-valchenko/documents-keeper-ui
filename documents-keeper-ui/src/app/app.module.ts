import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
// import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";
// import { StoreComponent } from "./store/store.component";
// import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
// import { CheckoutComponent } from "./store/checkout/checkout.component";
// import { StoreFirstGuard } from "./store-first.guard";
import { DocumentListComponent } from "./document-keeper/document-list/document-list.component";
import { DocumentsKeeperModule } from "./document-keeper/document-list.module";

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
      // },
      {
        path: 'document-list',
        component: DocumentListComponent
      },
      {
        path: '**',
        redirectTo: '/document-list'
      }
    ])],
  declarations: [AppComponent],
  // providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }