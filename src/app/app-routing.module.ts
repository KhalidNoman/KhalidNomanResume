import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainResumeComponent } from './main-resume/main-resume.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: "main-resume", component: MainResumeComponent},
  {path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
