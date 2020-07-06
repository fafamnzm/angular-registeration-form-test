import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { FinalComponent } from './components/final/final.component';

const routes: Routes = [
  { path: '', component: NameComponent },
  { path: 'address', component: AddressComponent },
  { path: 'final', component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
