import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaModule } from './conta/conta.module';
import { HomeComponet } from './navegacao/home/home.component';
import { NotFoundComponet } from './navegacao/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponet },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  },
  { path: '**', component: NotFoundComponet }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
