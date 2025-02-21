import { Component } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FocusTrapModule, ButtonModule, FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, AutoFocusModule]
})
export class AppComponent {
    name: string = '';

    email: string = '';

    accept: boolean = false;
}