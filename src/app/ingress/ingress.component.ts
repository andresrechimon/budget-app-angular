import { Component, OnInit } from '@angular/core';
import { Ingress } from './ingress.model';
import { IngressService } from './ingress.service';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.css']
})
export class IngressComponent implements OnInit {
  ingress: Ingress[] = [];

  constructor(private ingressService: IngressService) { }

  ngOnInit(): void {
    this.ingress = this.ingressService.ingress;
  }

  deleteRecord(ingres: Ingress){
    this.ingressService.delete(ingres);
  }

}
