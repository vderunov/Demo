import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainTitle = 'Shelter';
  mainTitleText = '';
  mainLogoSrc = `https://www.fonts-online.ru/img_fonts.php?id=17752&t=${this.mainTitle}`;
}
