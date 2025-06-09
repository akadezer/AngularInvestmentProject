import { Component, inject } from '@angular/core';

import { InvestmentResultsService } from '../investment-results.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentResultsService = inject(InvestmentResultsService);

  get results() {
    return this.investmentResultsService.results;
  }
}
