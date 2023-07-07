import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rzy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() emphasis: string = 'primary'; //primary, secondary, tertiary
  @Input() buttonText: string = ''
  @Input() disabled: boolean = false;
  @Input() type: string = "button";
  @Input() icon: string = '';
  @Input() iconOnly: boolean = false;
  
  @Output() onButtonClick: EventEmitter<Event> = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

}
