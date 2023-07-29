import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'categoria/:tipo', component:ContenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
