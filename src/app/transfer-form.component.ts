import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

export interface TransferFormModel {
  memo: string | null;
  amount: number | null;
  receiverAddress: string | null;
}
export interface TransferPayload {
  memo: string;
  amount: number;
  receiverAddress: string;
}

@Component({
  selector: 'reto-bc-transfer-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInput, MatIcon, MatButton],
  template: `
    <form #form="ngForm">
      <mat-form-field appearance="fill">
        <mat-label>Concepto</mat-label>
        <input
          name="memo"
          type="text"
          matInput
          placeholder="Ejemplo: Pagar el agua"
          [(ngModel)]="model.memo"
          required
          #memoControl="ngModel"
        />
        <mat-icon matSuffix>descripción</mat-icon>
        @if (form.submitted && memoControl.errors) {
          <mat-error>
            @if (memoControl.errors['required']) {
              El motivo es obligatorio
            }
          </mat-error>
        } @else {
          <mat-hint>Debe ser el motivo de la transferencia</mat-hint>
        }
      </mat-form-field>
    </form>
  `,
})
export class TransferFormComponent {
  readonly model: TransferFormModel = {
    memo: null,
    amount: null,
    receiverAddress: null,
  };
}
