import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDisplayComponent } from './components/card-display/card-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FilterCardsComponent, SearchCardsComponent, CardDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magic-cards';
  searchFilters: any;
  boosterCards: any[] = [];

  onSearch(filters: any) {
    this.searchFilters = filters;
  }

  onBoosterOpened(cards: any[]): void {
    this.boosterCards = cards;
  }
}
