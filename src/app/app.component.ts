import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NursesModule } from './nurses/nurses.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NursesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp2';
}
