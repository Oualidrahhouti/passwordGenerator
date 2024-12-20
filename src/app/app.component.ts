import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PasswordDisplayComponent } from './component/password-display.component';
import { PasswordControlsComponent } from './component/password-controls.component';
import { PasswordSettingsComponent } from './component/password-settings.component';
import { Settings } from './component/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    PasswordDisplayComponent,
    PasswordControlsComponent,
    PasswordSettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Password Generator';

  length = 6;

  uppercase = false;

  numbers = false;

  symbols = false;

  password: string = '';

  onSettingsChange(settings: Settings) {
    this.length = settings.length;
    this.uppercase = settings.uppercase;
    this.numbers = settings.numbers;
    this.symbols = settings.symbols;
  }
  onGeneratingPassword(password: string) {
    this.password = password;
  }
}
