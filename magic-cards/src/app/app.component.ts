import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilterCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magic-cards';
}
