import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maincomponent from './main.component';
import logincomponent from './login.component';
import footercomponent from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, maincomponent, logincomponent, footercomponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fb';
}
