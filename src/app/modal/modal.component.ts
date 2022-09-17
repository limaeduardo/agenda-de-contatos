import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import * as M from 'materialize-css';

interface ModalContent {
  title: string;
  text: string;
  show: boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() content?: ModalContent;
  @Input() show: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();

  @ViewChild('modal1') modal?: ElementRef;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content?.show) {
      M.Modal.init(this.modal?.nativeElement, {})?.open();
    }
  }

  onClose() {
    this.closeEvent.emit(false);
  }

  ngOnInit(): void {}
}
