import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  indianCurrencySign = 'INR';
}
