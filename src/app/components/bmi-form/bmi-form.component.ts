import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent {

  // TODO: fix
  kg = 32
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


  totalInches$: Observable<number> = this.convertToInches()

  constructor() {

    // this.bmiForm.valueChanges.pipe().subscribe({
    //   next: (value) => console.log(value)
    // })
  }

  convertToInches(): Observable<number> {
    return combineLatest({
      // TODO: fix
      feet: this.bmiForm.get('feet')?.valueChanges as any,
      inches: this.bmiForm.get('inches')?.valueChanges as any,
    }).pipe(
      tap((value) => console.log('TCL: value', value)), // TODO: remove
      map(({ feet, inches }) => this.getTotalInches(feet as number, inches as number))
    )
  }

  showScore(): void {
    this.isScoreDisplayed = true;
  }

  private getTotalInches(feet: number, inches: number): number {
    return feet * 12 + inches
  }
}
