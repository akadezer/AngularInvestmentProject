import { Component, Input } from '@angular/core';
import { userInput } from '../user-input/user-input.model';
import { InvestmentResults } from './investment-results.model';
import { calculateInvestmentResults } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) userData!: userInput;
  results: InvestmentResults[] = calculateInvestmentResults(this.userData);
}
