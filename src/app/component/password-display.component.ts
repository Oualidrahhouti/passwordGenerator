import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-display',
  standalone: true,
  imports: [],
  templateUrl: './password-display.component.html',
  styleUrl: './password-display.component.css',
})
export class PasswordDisplayComponent {
  @Input('message')
  message = '';
}
