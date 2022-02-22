import { Component, OnInit } from '@angular/core';
import { Egress } from '../egress/egress.model';
import { EgressService } from '../egress/egress.service';
import { Ingress } from '../ingress/ingress.model';
import { IngressService } from '../ingress/ingress.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  type = 'ingressOp';
  descriptionInput: string;
  valueInput: number;

  constructor(private ingressService: IngressService, private egressService: EgressService) { }

  ngOnInit(): void {
  }

  operationType(event){
    this.type = event.target.value;
  }

  addValue(){
    if (this.type === 'ingressOp'){
      this.ingressService.ingress.push(new Ingress(this.descriptionInput, this.valueInput));
    }
    else{
      this.egressService.egress.push(new Egress(this.descriptionInput, this.valueInput));
    }
  }

}
