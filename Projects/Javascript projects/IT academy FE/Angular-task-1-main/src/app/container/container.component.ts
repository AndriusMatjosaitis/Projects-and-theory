import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() paymentDetails: number = 0;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


  constructor() { }

  ngOnInit(): void {
  }
  mouseClick(event: MouseEvent) {
    this.onClick.emit(event);
    this.paymentDetails += 1;
    console.log(this.paymentDetails);
  }
}
