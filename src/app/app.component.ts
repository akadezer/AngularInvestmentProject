import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { userInput } from './user-input/user-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  userInput!: userInput;
  res = false;

  calculateRes(userInput: userInput) {
    this.userInput = userInput;
    this.res = true;
  }

  get userdata() {
    return this.userInput;
  }
}
