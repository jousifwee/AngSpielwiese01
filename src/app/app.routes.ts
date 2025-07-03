import { Routes } from '@angular/router';

import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';
import { Page3 } from './page3/page3';
1
export const routes: Routes = [
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
  { path: 'page3', component: Page3 },
  // Default route
  // Redirect to 'page1' if no path is specified
  { path: '', redirectTo: 'page1', pathMatch: 'full' }
];