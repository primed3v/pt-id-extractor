import {bi,cc,nif} from "pt-id";
import { environment } from "./environments/environment";


export class Validators {
    
    validateNIF(nifP: string): boolean {
        if (nifP.match(environment.regex_nif)) {
            return nif.validate(nifP);
        }
       return false;
    }

   validateCC(cartaoCidadoP: string): boolean {
       if (cartaoCidadoP.match(environment.regex_cc)) {
            return  cc.validate(cartaoCidadoP);
       }
        return false;
   }

   validateBI(biP: string): boolean {
       return bi.validate(biP);
   }

   validateNISS(nissP: string): boolean {
    if (nissP.length != 11) {
        return false;
    } else {
        const FACTORS = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
        const nissArray = [];
        for (let i = 0; i < nissP.length; i++) {
            nissArray[i] = nissP.charAt(i);
        }
        let sum=0;
        //faz a soma do digito [j] x o dígito [j] do array dos fatores
        for (let j = 0; j < FACTORS.length; j++) {
            sum += parseInt(nissArray[j]) * FACTORS[j];
        }

        //verifica se dá resto 0
        if (parseInt(nissArray[nissArray.length - 1]) == (9 - (sum % 10))) {
            return true;
        } else {
            return false;
        }
    }
   }
}