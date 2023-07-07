import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rzy-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit(): void {
  }

}
