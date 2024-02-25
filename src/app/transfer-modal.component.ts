import { Component } from '@angular/core';
import { TransferFormComponent } from './transfer-form.component';

@Component({
  selector: 'reto-bc-transfer-modal',
  standalone: true,
  imports: [TransferFormComponent],
  template: `
    <div>
      <h2 class="text-3xl">Transferir Fondos</h2>
      <reto-bc-transfer-form></reto-bc-transfer-form>
    </div>
  `,
})
export class TransferModalComponent {}
