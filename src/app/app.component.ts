import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeatherComponent } from './components/heather/heather.component';
@Component({
  selector: 'app-root', // en index.html esta como <app-root></app-root>
  standalone: true,
  imports: [CommonModule, HeatherComponent, RouterOutlet],
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-heather></app-heather>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
}
