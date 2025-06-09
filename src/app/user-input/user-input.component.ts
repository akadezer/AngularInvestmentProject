import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type userInput } from './user-input.model';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  investementService = inject(InvestmentResultsService);

  onSubmit() {
    this.investementService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
