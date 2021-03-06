import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { HeadpageComponent } from './headpage/headpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PathComponent } from './path/path.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SocialComponent } from './social/social.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ImprintComponent,
    DataprotectionComponent,
    HeadpageComponent,
    AboutmeComponent,
    SkillsComponent,
    PathComponent,
    ContactComponent,
    MainComponent,
    SocialComponent,
    ConfirmpageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
