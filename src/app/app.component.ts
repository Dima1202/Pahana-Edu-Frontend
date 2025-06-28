// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { StudentComponent } from './components/student/student.component';
// import { DashboardComponent} from './components/dashboard/dashboard.component';
// import { CustomerComponent } from './components/customer/customer.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,StudentComponent, DashboardComponent, CustomerComponent, ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {}


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ Only import RouterModule (includes RouterOutlet)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
