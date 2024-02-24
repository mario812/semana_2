import { Component} from '@angular/core';
import { HeroSectionComponent } from './hero-section.components';
import { FeaturesSectionComponent } from './features-section.component';

@Component({
    selector: 'reto-bc-home-page',
    standalone: true,
    imports: [HeroSectionComponent, FeaturesSectionComponent],
    template: `
    <reto-bc-hero-section></reto-bc-hero-section>
    <reto-bc-features-section></reto-bc-features-section>
    `,
})

export class HomePageComponent {}
