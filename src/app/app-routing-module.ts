import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
  },
  { path: '**', redirectTo: '' },
];


// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       {
//         path: '',
//         loadComponent: () =>
//           import('./pages/home/home.component').then((m) => m.HomeComponent),
//       },
//     ],
//   },
//   { path: '**', redirectTo: '' },
// ];
