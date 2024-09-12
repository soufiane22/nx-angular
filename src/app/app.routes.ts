import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path:'',
    component:NxWelcomeComponent,
    pathMatch:'full'
  },
  {
    path:'products',
    loadComponent: () =>
        import('@myngapp/produts').then((c) => c.ProdutsComponent),
  },
  {
    path:'ui',
    loadComponent: () => 
        import('@myngapp/ui').then((c) => c.UiComponent)
  }
];
