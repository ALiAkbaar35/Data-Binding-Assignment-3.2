import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllNursesComponent } from './all-nurses/all-nurses.component';
import { SelectedNursesComponent } from './selected-nurses/selected-nurses.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  { path: '', component: AllNursesComponent },
  { path: 'selected-nurses', component: SelectedNursesComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent },
];

@NgModule({
  declarations: [AllNursesComponent, SelectedNursesComponent,ProfileDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ RouterModule],
})
export class NursesModule {}
