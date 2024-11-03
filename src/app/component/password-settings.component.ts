import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'password-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-settings.component.html',
  styleUrl: './password-settings.component.css',
})
export class PasswordSettingsComponent {
  length = 6;
  uppercase = false;

  numbers = false;

  symbols = false;

  @Output('settingsChange')
  onSettingsChangeEvent = new EventEmitter();

  onSettingsChange() {
    this.onSettingsChangeEvent.emit({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
  }
}
