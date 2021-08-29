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
      let outputValue = inputValue;
      this.badWords.forEach(bw => {
        if (outputValue.includes(bw)) {
          outputValue = outputValue.replace(bw, '');
          this.currentInvalidClass = this.invalidClass;
        }
      });
      this.result = outputValue;
      this.ngModelChange.emit(outputValue);
    }
  }

}
