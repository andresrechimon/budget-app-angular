import { Component, Input, OnInit } from '@angular/core';
import { Egress } from './egress.model';
import { EgressService } from './egress.service';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.css']
})
export class EgressComponent implements OnInit {
  @Input()totalIngress: number;
  egress: Egress[] = [];

  constructor(private egressService: EgressService) { }

  ngOnInit(): void {
    this.egress = this.egressService.egress;
  }

  deleteRecord(egres: Egress){
    this.egressService.delete(egres);
  }

  calculatePercentage(egres: Egress){
    return egres.value / this.totalIngress;
  }

}
