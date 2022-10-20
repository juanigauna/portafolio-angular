import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BasicInfoComponent } from './shared/components/basic-info/basic-info.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { TimeLineComponent } from './shared/components/time-line/time-line.component';
import { ExpItemComponent } from './shared/components/time-line/exp-item/exp-item.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { SkillItemComponent } from './shared/components/skills/skill-item/skill-item.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { ProjectItemComponent } from './shared/components/projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BasicInfoComponent,
    AboutMeComponent,
    TimeLineComponent,
    ExpItemComponent,
    SkillsComponent,
    SkillItemComponent,
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
