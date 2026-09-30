import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { Label } from 'primeng/label';
import { RadioButton } from 'primeng/radiobutton';
import { InputText } from 'primeng/inputtext';
import { User } from '@primeicons/angular/user';
import { Check } from '@primeicons/angular/check';
import { User as PrimeUser, DEFAULT_USER } from 'lib-primeui';

@Component({
  imports: [RouterOutlet, ButtonDirective, InputText, RadioButton, Label, FormsModule, User, Check],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular primeui');
  protected user: PrimeUser = DEFAULT_USER;

  selectedCategory: string | undefined;
  categories = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];
}
