import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() listOfThings: string[];
  @Input() theObject: { username: string, favoriteColor: string };

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.cd.detectChanges();
    // }, 5000);
  }

  refresh(): void {
    // this.cd.detectChanges();
  }

}
