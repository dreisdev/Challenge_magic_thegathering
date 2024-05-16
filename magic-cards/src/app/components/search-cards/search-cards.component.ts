import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { FilterCardsComponent } from '../filter-cards/filter-cards.component';
import { LoadingComponent } from '../loading/loading.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-cards',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FilterCardsComponent, LoadingComponent],
  templateUrl: './search-cards.component.html',
  styleUrl: './search-cards.component.scss'
})
export class SearchCardsComponent implements OnInit, OnChanges {
  @Input() filters: any;
  sets: any[] = [];
  cards: any[] = [];
  loading: boolean = false;
  error: string = '';

  @Output() boosterOpened: EventEmitter<any> = new EventEmitter(); 

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && this.filters) {
      this.onSearch(this.filters);
    }
  }

  onSearch(filters: any): void {
    const { cardName, block } = filters;
    this.apiService.getSets(cardName, block).subscribe((data: any) => {
      console.log('Data received from API:', data);
      this.sets = data.sets;
    });
  }

  openBoosters(setCode: string): void {
    this.loading = true;
    this.cards= [];
    this.error = '';
    let count = 0;
 

  const fetchBooster = () => {
    this.apiService.getBooster(setCode).subscribe((data: any)=> {
      console.log('Data from API call Booster:', data);
      const creatureCards = data.cards.filter((card: any)=> card.types.includes('Creature'));
      this.cards.push(...creatureCards);

      if (this.cards.length < 30 && count < 5) {
        count++;
        fetchBooster();
      } else {
        this.loading = false;
        this.boosterOpened.emit(this.cards.slice(0, 30));
        this.router.navigate(['/cards'], { state: { cards: this.cards.slice(0, 30) } });
      }
    },
    (error) => {
      if (error.status === 400) {
        this.error = 'Nenhum booster encontrado para este conjunto.';
      } else {
        this.error = 'Erro ao abrir os boosters. Tente novamente.';
      }
      this.loading = false;
    }
  );
  }
  fetchBooster();
}
  
}
