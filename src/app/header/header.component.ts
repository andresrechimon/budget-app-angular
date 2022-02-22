import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()totalBudget: number;
  @Input()totalIngress: number;
  @Input()totalEgress: number;
  @Input()totalPercentage: number;

  constructor() { }

  ngOnInit(): void {
  }

}
