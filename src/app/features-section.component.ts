import { Component } from '@angular/core';

@Component({
  selector: 'reto-bc-features-section',
  standalone: true,
  template: `
    <section class="p-16">
      <ul class="flex justify-center items-center gap-4">
        <li>Rapido</li>
        <li>Eficiente</li>
        <li>Seguro</li>
      </ul>
    </section>
  `,
})
export class FeaturesSectionComponent {}
