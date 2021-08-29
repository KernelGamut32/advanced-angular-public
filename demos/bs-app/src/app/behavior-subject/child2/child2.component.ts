import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  valueOne: string;
  valueTwo: string;

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  sendData(): void {
    this.transferService.pushData({ valueOne: this.valueOne, valueTwo: this.valueTwo });
  }

}
