import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent {

  bmi = 0
  isScoreDisplayed = false;

  bmiForm = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    gender: new FormControl<string>('', [Validators.required]),
    feet: new FormControl<number>(0, [Validators.required, Validators.max(7), Validators.min(0)]),
    inches: new FormControl<number>(0, [Validators.required, Validators.max(12), Validators.min(0)]),
    weight: new FormControl<number>(0, [Validators.required, Validators.max(200), Validators.min(30)]),
  })

  get emailErrors(): ValidationErrors | null | undefined {
    return this.bmiForm.get('email')?.errors
  }

  constructor() {

    // this.bmiForm.valueChanges.pipe().subscribe({
    //   next: (value) => console.log(value)
    // })
  }

  showScore(): void {
    this.isScoreDisplayed = true;
  }

}
