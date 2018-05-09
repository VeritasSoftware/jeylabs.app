import { Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { ShapeViewerComponent } from './components/shape-viewer/shape-viewer.component'

export const appRoutes: Routes = [
    { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },  
    { 
      path: 'home', 
      component: ShapeViewerComponent 
    }
  ];