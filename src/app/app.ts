import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { code128c } from './code128c';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AngSpielwiese01';
  eingabeZiffernFolge = signal('');
  // Ja, Sie können Variablen auch ohne signal deklarieren:
  outputString = signal('Í"Î');

  update(value: string) {
     this.outputString.set(code128c(value));
  }
}



