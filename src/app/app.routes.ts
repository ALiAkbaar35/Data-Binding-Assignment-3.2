import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'nurses', 
    loadChildren: () =>
      import('./nurses/nurses.module').then((m) => m.NursesModule),
  },
  { path: '**', redirectTo: 'nurses' }, 
];
