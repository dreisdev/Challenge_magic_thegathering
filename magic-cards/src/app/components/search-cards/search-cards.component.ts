import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { FilterCardsComponent } from '../filter-cards/filter-cards.component';

@Component({
  selector: 'app-search-cards',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FilterCardsComponent],
  templateUrl: './search-cards.component.html',
  styleUrl: './search-cards.component.scss'
})
export class SearchCardsComponent implements OnInit, OnChanges {
  @Input() filters: any;
  sets: any[] = [];

  constructor(private apiService: ApiService) {}

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
  
}
