import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: '**', redirectTo: '' }
];

export default routes;