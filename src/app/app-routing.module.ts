import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LocationComponent} from '../app/Components/location/location.component';
const routes: Routes = [{path:'Location', component: LocationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
