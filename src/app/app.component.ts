import { Component } from '@angular/core';
import { Egress } from './egress/egress.model';
import { EgressService } from './egress/egress.service';
import { Ingress } from './ingress/ingress.model';
import { IngressService } from './ingress/ingress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingress: Ingress[] = [];
  egress: Egress[] = [];

  constructor(private ingressService: IngressService, private egressService: EgressService){
    this.ingress = ingressService.ingress;
    this.egress = egressService.egress;
  }

  // tslint:disable-next-line:typedef
  getTotalIngress(): number{
    let totalIngress = 0;
    this.ingress.forEach(ingres => {
      totalIngress += ingres.value;
    });
    return totalIngress;
  }

  // tslint:disable-next-line:typedef
  getTotalEgress(): number{
    let totalEgress = 0;
    this.egress.forEach(egres => {
      totalEgress += egres.value;
    });
    return totalEgress;
  }


  // tslint:disable-next-line:typedef
  getTotalPercentage(){
    return this.getTotalEgress() / this.getTotalIngress();
  }

  // tslint:disable-next-line:typedef
  getTotalBudged(){
    return this.getTotalIngress() - this.getTotalEgress();
  }
}

