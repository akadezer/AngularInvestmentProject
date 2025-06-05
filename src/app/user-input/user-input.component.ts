import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type userInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput!: userInput;
  @Output() inputData = new EventEmitter<userInput>();
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onSubmit() {
    this.userInput = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    this.inputData.emit(this.userInput);
  }
}
