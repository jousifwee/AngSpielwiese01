import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { code128c } from '../code128c';
@Component({
  selector: 'app-page2',
  imports: [FormsModule],
  templateUrl: './page2.html',
  styleUrl: './page2.scss'
})
export class Page2 {
  eingabeZiffernFolge = ""
  outputString = "";
  update(value: string) {
    this.outputString = code128c(value);
  }
}
