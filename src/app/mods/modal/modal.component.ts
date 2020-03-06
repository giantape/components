import { Component, OnInit, OnDestroy, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {document.body.appendChild(this.el.nativeElement)}

  ngOnDestroy() {this.el.nativeElement.remove()}

  onCloseClick() {
    this.closeModal.emit();
  }

}
