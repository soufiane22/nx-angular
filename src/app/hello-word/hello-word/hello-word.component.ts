import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.css',
})
export class HelloWordComponent {}
