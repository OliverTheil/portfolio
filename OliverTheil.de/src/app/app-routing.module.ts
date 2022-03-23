import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { MoreaboutmeComponent } from './moreaboutme/moreaboutme.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'moreaboutme', component: MoreaboutmeComponent },
  { path: 'social', component: SocialComponent },
  { path: 'dataprotection', component: DataprotectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
