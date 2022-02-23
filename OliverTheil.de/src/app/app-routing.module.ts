import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {path: 'imprint', component: ImprintComponent},
  {path: 'dataprotection', component: DataprotectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
