import { Component, computed, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page3',
  imports: [FormsModule],
  templateUrl: './page3.html',
  styleUrl: './page3.scss',
  standalone: true
})
export class Page3 {
  plainText = signal<string>('a');
  base64Text = signal<string>('b');
  encoded = '';
  decoded = '';
  encoded1 = computed(() => this.plainText);

  encode(): void{
    this.base64Text.set(btoa(this.plainText()));
  };
  decode(): void{
    this.plainText.set(atob(this.base64Text()));
  };
/*
  constructor() {
    effect(() => {
      this.encoded = btoa(this.plainText());
      console.log('Base64: _ ', this.encoded);
      this.base64Text.set(this.encoded);
    });

    effect(() => {
      this.decoded = atob(this.base64Text());
      console.log('Base64: _ ', this.decoded);
      this.plainText.set(this.decoded);
    });

  }
*/
}