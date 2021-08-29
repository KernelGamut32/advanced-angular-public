import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appBadWords]'
})
export class BadWordsDirective {

  @Input() invalidClass: string;
  @Output() ngModelChange = new EventEmitter();
  @HostBinding('class') currentInvalidClass: string;
  @HostBinding('value') result = '';

  private badWords = ['stupid', 'bad', 'dumb'];

  constructor() { }

  @HostListener('change', ['$event'])
  onChange(event: any): void {
    const inputValue = event?.target?.value;
    if (inputValue) {
      const inputValueLength = inputValue.length;
      let outputValue = inputValue;
      this.badWords.forEach(bw => {
        const regExp = new RegExp(`${bw}`, 'gi');
        outputValue = outputValue.replaceAll(regExp, '');
      });
      if (outputValue.length !== inputValueLength) {
        this.currentInvalidClass = this.invalidClass;
      }
      this.result = outputValue;
      this.ngModelChange.emit(outputValue);
    }
  }

}
