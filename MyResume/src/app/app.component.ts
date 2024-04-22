import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';
import { CourseComponent } from './course/course.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, SummaryComponent, ExperienceComponent, ProjectComponent, EducationComponent, CourseComponent, AchievementsComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyResume';
}
