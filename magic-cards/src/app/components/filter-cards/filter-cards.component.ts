import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-cards',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-cards.component.html',
  styleUrl: './filter-cards.component.scss'
})
export class FilterCardsComponent implements OnInit {
 searchForm!: FormGroup;

 @Output() search: EventEmitter<any> = new EventEmitter();

 constructor() { }

 ngOnInit(): void {
     this.searchForm = new FormGroup ({
      cardName: new FormControl(''),
      block: new FormControl('', {validators: [Validators.required]})
     });
 }

 onSubmit(): void {
  console.log('Form submitted:', this.searchForm.value);
  this.search.emit(this.searchForm.value);
 }
}
