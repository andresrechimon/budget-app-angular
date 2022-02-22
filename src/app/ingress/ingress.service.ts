import { Ingress } from './ingress.model';

export class IngressService{
    ingress: Ingress[] = [];

    delete(ingres: Ingress){
        const index: number = this.ingress.indexOf(ingres);
        this.ingress.splice(index, 1);
    }
}
