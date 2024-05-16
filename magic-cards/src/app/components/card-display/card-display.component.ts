import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.scss'
})
export class CardDisplayComponent implements OnInit{
@Input() cards: any[] = [];

constructor(private route: Router) {}

ngOnInit(): void {
  console.log('Cards received in CardDisplayComponent: ', this.cards);
  const navigation = this.route.getCurrentNavigation();
  if (navigation?.extras.state) {
    this.cards = navigation.extras.state['cards'];
  }
}
}

