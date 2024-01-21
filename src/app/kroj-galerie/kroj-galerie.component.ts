import {Component, Input} from '@angular/core';
import {GalleriaModule, GalleriaResponsiveOptions} from "primeng/galleria";
import {SoucastKroje} from "../domain/soucastKroje";

@Component({
  selector: 'app-kroj-galerie',
  standalone: true,
  imports: [
    GalleriaModule
  ],
  templateUrl: './kroj-galerie.component.html',
  styleUrl: './kroj-galerie.component.css'
})
export class KrojGalerieComponent {
  @Input() typ: 'FJERTUCH' | 'SUKNE' | 'PANTLE' | 'SATEK';

  @Input() soucastiKroje: SoucastKroje[];


  responsiveOptions: GalleriaResponsiveOptions[] = [
  ]

  constructor() { }

  getSoucastiKroje() {
    return this.soucastiKroje.filter(x => x.typ === this.typ);
  }

  getLabel() {
    switch (this.typ) {
      case 'FJERTUCH':
        return 'Fjertuch';
      case 'SUKNE':
        return 'Sukně';
      case 'PANTLE':
        return 'Pantle';
      case 'SATEK':
        return 'Šátek';
    }
  }
}
