import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo:'login',
    component: LoginComponent,
    pathMatch:'full',
    outlet : 'login'

  },
  {
    path: '**',
    component: PageNotFoundComponent,
    outlet : 'header'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
