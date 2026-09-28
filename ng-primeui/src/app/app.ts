import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { Label } from 'primeng/label';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  imports: [RouterOutlet, ButtonDirective, RadioButton, Label, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-primeui');

  selectedCategory: string | undefined;
  categories = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];
}
