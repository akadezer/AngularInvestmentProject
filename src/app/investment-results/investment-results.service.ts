// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { userInput } from '../user-input/user-input.model';

export function calculateInvestmentResults(userData: userInput) {
  console.log('Calculating investment results for:', userData);
  const annualData = [];
  let investmentValue = userData.initialInvestment;

  for (let i = 0; i < userData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear =
      investmentValue * (userData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + userData.annualInvestment;
    const totalInterest =
      investmentValue -
      userData.annualInvestment * year -
      userData.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: userData.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested:
        userData.initialInvestment + userData.annualInvestment * year,
    });
  }

  return annualData;
}
