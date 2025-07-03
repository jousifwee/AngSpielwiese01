import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { code128c } from '../code128c';

@Component({
  selector: 'app-page1',
  imports: [FormsModule],
  templateUrl: './page1.html',
  styleUrl: './page1.scss'
})
export class Page1 {
  // Using signals for reactive state management
  // This allows for automatic updates in the UI when the value changes
  // Signals are a new feature in Angular that provide a simpler way to manage state
  eingabeZiffernFolge = signal('');

  // Computed property that automatically updates when eingabeZiffernFolge changes
  // This is similar to a derived state in other frameworks
  // It recalculates the outputString whenever eingabeZiffernFolge changes
  outputString = computed(() => code128c(this.eingabeZiffernFolge()));
}
