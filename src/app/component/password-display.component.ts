import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-display.component.html',
  styleUrl: './password-display.component.css',
})
export class PasswordDisplayComponent {
  @Input('password')
  password = '';
}
