import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-nx-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-nx-component.component.html',
  styleUrl: './my-nx-component.component.css',
})
export class MyNxComponentComponent {}
