import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';
  @Output() closed = new EventEmitter<void>();

}
