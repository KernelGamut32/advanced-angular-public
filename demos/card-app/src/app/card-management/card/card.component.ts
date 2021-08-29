import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild('header') cardContentHeader: ElementRef;
  @ContentChild('content') cardContent: ElementRef;
  @ContentChild('footer') cardContentFooter: ElementRef;
  @ViewChild('customInput') cardViewInput: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.cardViewInput.nativeElement, 'value', 'Updated!');
  }

  ngAfterContentInit(): void {
    this.renderer.setStyle(this.cardContentHeader.nativeElement, 'font-size', '60px');
  }

  ngOnInit(): void {
  }

}
