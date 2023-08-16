import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.scss']
})
export class PinCodeComponent {
  @Output() emitCode = new EventEmitter<string>();

  @ViewChild('resetEle', { static: true }) resetEle: any;

  pinValue = Array(4).fill(null);

  onDigitCheck(event: any) {
    if (event.target.value && event.target.value.length == 1 && Number.isInteger(+event.target.value)) {
      setTimeout(() => {
        this.focusElement(event.srcElement.nextElementSibling);
      }, 50);
    } else if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }
  }

  backspace(event: any) {
    event.stopPropagation();
    event.target.value = "";
    this.focusElement(event.srcElement.previousElementSibling);
  }

  focusElement(element: HTMLInputElement) {
    if (element) {
      element.focus();
      element.select();
    }
  }

  triggerResult(event: any) {
    this.emitCode.next(this.pinValue.join(""));
  }

  clearForm() {
    this.pinValue = Array(4).fill(null);
    this.resetEle.nativeElement.focus();
  }

}
