import { Egress } from './egress.model';

export class EgressService{
    egress: Egress[] = [];

    delete(egres: Egress){
        const index: number = this.egress.indexOf(egres);
        this.egress.splice(index, 1);
    }
}
