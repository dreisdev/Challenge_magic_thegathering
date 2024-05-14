import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-cards',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-cards.component.html',
  styleUrl: './filter-cards.component.scss'
})
export class FilterCardsComponent implements OnInit {
 searchForm!: FormGroup;

 constructor() { }

 ngOnInit(): void {
     this.searchForm = new FormGroup ({
      cardName: new FormControl(''),
      block: new FormControl('', {validators: [Validators.required]})
     });
 }

 onSubmit(): void {
  console.log(this.searchForm.value);
  this.searchForm.reset();
 }
}
