import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.close.emit();
  }

}
