import { AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-key-check',
  templateUrl: './key-check.component.html',
  styleUrls: ['./key-check.component.css']
})
export class KeyCheckComponent implements AfterViewInit, OnDestroy {
  keys = '';
  @ViewChild('keyInput') keyInput: ElementRef;
  subscription: Subscription;

  constructor() { }

  ngAfterViewInit(): void {
    const logger = fromEvent(this.keyInput.nativeElement, 'keyup');
    this.subscription = logger.pipe(
      map((evt: KeyboardEvent) => evt.key.charCodeAt(0)),
      filter(code => {
        return !(code < 48 || code > 57);
      }),
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe(_ => {
      const value = +this.keys;
      if (value > 999999) {
        console.log('Whoa - that is way too high!!');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  reset(): void {
    this.keys = '';
  }
}
