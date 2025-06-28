import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomerComponent }

];
