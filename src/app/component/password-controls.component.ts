import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  standalone: true,
  imports: [],
  templateUrl: './password-controls.component.html',
  styleUrl: './password-controls.component.css',
})
export class PasswordControlsComponent {
  @Output('generate-password')
  onGeneratingPassword = new EventEmitter<string>();

  onClickGenerate() {
    this.onGeneratingPassword.emit('random password');
  }
}
