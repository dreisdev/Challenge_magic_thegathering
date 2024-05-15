import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FilterCardsComponent, SearchCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magic-cards';
  searchFilters: any;

  onSearch(filters: any) {
    this.searchFilters = filters;
  }
}
