import { Component } from '@angular/core';
import { TransferFormComponent, TransferFormPayload } from './transfer-form.component';

@Component({
  selector: 'reto-bc-transfer-modal',
  standalone: true,
  imports: [TransferFormComponent],
  template: `
    <div>
      <h2 class="text-3xl text-center mb-4" style="color: white;">Transferir Fondos</h2>
      <reto-bc-transfer-form (submitForm)="onTransfer($event)"></reto-bc-transfer-form>
    </div>
  `,
})
export class TransferModalComponent {
  onTransfer (payload: TransferFormPayload) {
    console.log('hola Mundo', payload);
  }
}
