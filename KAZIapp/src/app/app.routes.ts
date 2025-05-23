import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthpassComponent } from './authpass/authpass.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { EmployerboardComponent } from './employerboard/employerboard.component';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { JobseekerboardComponent } from './jobseekerboard/jobseekerboard.component';
import { JobseekerProfileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { AIboardComponent } from './aiboard/aiboard.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { JobSeekerloginComponent } from './job-seekerlogin/job-seekerlogin.component';
import { AboutComponent } from './about/about.component';
import { JobSeekersignupComponent } from './job-seekersignup/job-seekersignup.component';
import { Authpass2Component } from './authpass2/authpass2.component';

// // Define routes with type safety
export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'authpass', component: AuthpassComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent },
  { path: 'employerboard', component: EmployerboardComponent },
  { path: 'employerlogin', component: EmployerloginComponent },
  { path: 'employersignup', component: EmployersignupComponent },
  { path: 'jobseekerboard', component: JobseekerboardComponent },
  { path: 'jobseekerprofile', component: JobseekerProfileComponent },
  { path: 'aiboard', component: AIboardComponent },
  { path: 'adminboard', component: AdminboardComponent },
  { path: 'job-seekerlogin', component: JobSeekerloginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'job-seekersignup', component: JobSeekersignupComponent },
  { path: 'authpass2', component: Authpass2Component },
];