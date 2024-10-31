import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordControlsComponent } from './password-controls.component';

describe('PasswordControlComponent', () => {
  let component: PasswordControlsComponent;
  let fixture: ComponentFixture<PasswordControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
