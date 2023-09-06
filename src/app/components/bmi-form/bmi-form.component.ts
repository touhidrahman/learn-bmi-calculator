import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent {

  bmiForm = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    gender: new FormControl<string>('', [Validators.required]),
    feet: new FormControl<number>(0, [Validators.required, Validators.max(7), Validators.min(0)]),
    inches: new FormControl<number>(0, [Validators.required, Validators.max(12), Validators.min(0)]),
    weight: new FormControl<number>(0, [Validators.required, Validators.max(200), Validators.min(30)]),
  })

  constructor() {}
}
