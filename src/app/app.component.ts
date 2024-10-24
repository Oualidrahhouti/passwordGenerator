import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Password Generator';

  length = 6;

  uppercase = false;

  numbers = false;

  symbols = false;

  password = '';

  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUpperCase() {
    this.uppercase = !this.uppercase;
  }

  onChangeNumbers() {
    this.numbers = !this.numbers;
  }

  onChangeSymbols() {
    this.symbols = !this.symbols;
  }

  generatePassword() {}
}
