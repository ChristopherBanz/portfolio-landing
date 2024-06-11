import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ContactComponent,
  TopbarComponent,
ProjectlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-landing';
}




