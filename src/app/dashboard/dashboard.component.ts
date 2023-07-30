import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

console.log("logs lala");

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dashboard works!
    </p>
    <div>hola</div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
