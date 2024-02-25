import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';


@Component({
  selector: 'reto-bc-balance-page',
  imports: [BalanceSectionComponent, TransactionsSectionComponent],
  standalone: true,
  template: `
    <div class="flex justify-center gap-4">
      <reto-bc-balance-section></reto-bc-balance-section>
      <reto-bc-transactions-section></reto-bc-transactions-section>

    </div>
  `,
 
  
})
export class BalancePageComponent {}