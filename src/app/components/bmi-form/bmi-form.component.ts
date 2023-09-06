import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { KgToPoundPipe } from 'src/app/pipes/kg-to-pound.pipe';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent {

  bmi = 0
  weightRange = ''
  isScoreDisplayed = false;

  bmiForm = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    gender: new FormControl<string>('', [Validators.required]),
    feet: new FormControl<number>(1, [Validators.required, Validators.max(7), Validators.min(1)]),
    inches: new FormControl<number>(1, [Validators.required, Validators.max(12), Validators.min(1)]),
    weight: new FormControl<number>(1, [Validators.required, Validators.max(200), Validators.min(30)]),
  })

  get emailErrors(): ValidationErrors | null | undefined {
    return this.bmiForm.get('email')?.errors
  }

  showScore(): void {
    const feet = this.bmiForm.get('feet')?.value
    const inches = this.bmiForm.get('inches')?.value
    const heightInInches = this.getTotalInches(feet ?? 0, inches ?? 0)

    const weightKg = this.bmiForm.get('weight')?.value ?? 0
    const weightLbs = weightKg * 2.204623

    this.bmi = this.getBmiScore(heightInInches, weightLbs);
    this.weightRange = this.getWeightRange(this.bmi)
    this.isScoreDisplayed = true;
  }

  private getTotalInches(feet: number, inches: number): number {
    return feet * 12 + inches
  }

  private getBmiScore(height: number, weight: number): number {
    return (weight / (height * height)) * 703;
  }

  private getWeightRange(value: number): string {
    if (value < 18.5) return 'Underweight';
    if (value < 24.9) return 'Normal';
    if (value < 29.9) return 'Overweight';
    return 'Obese';
  }

}
