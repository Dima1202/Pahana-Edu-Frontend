import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // ✅ mark as standalone
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule], // ✅ import CommonModule and RouterModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalCustomers = 120;
  totalItems = 85;
  recentBills = 23;
}
