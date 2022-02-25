import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddProductdetailsComponent } from './components/add-productdetails/add-productdetails.component';
import { AddProductlistComponent } from './components/add-productlist/add-productlist.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-product' },
  { path: 'add-productlist', component: AddProductlistComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: AddProductdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
