import { Extractor } from "../src/extractor";
import { expect } from "chai";

describe("validators unit tests", (): void => {
    const extractor = new Extractor();
    it("extract nifs from text", (): void => {
        const result: string[] = extractor.extractNIFs("510096328");
        const expected: string[]= [ "510096328" ] ;
        expect(result).to.deep.equals(expected);
    });

    it("extract CC's from text", (): void => { 
        const result: string[] = extractor.extractCCs("37527398 0 ZV1");
        const expected: string[]= [ "375273980ZV1" ] ;
        expect(result).to.deep.equals(expected);
    });

    it("extract CC's from text when we have 'o' taken place of zero", (): void => { 
        const result: string[] = extractor.extractCCs("37527398 o ZV1");
        const expected: string[]= [ "375273980ZV1" ] ;
        expect(result).to.deep.equals(expected);
    });

    it("extract BIs from text", (): void => { 
        const result: string[]  = extractor.extractBIs("900000007");
        const expected: string[]= [ "900000007" ] ;
        expect(result).to.deep.equals(expected);
    });

    it("extract Niss from text", (): void => { 
        const result: string[]  = extractor.extractNISSs("12028701347");
        const expected: string[]= [ "12028701347" ] ;
        expect(result).to.deep.equals(expected);
    });

    it("extract Dates from text", (): void => { 
        const result: string[]  = extractor.extractDates("TÍTULO DE RESIDÊNCIA 87167L1M5\nPRTO\nPKUAKE\n87167L1M5\nAPELIDOS Nomes/ SURNAMES Forenames\nESTEVES VIANA\nPaulo Victor\nSEXO/\nSEX\nNACIONALIDADE/\nNATIONALITY\nDATA NASC./\nBIRTH DATE\nBRA\n21 07 1992\nTIPO DE TÍTULO/ TYPE OF PERMIT\nVALIDADE DO CARTÃO/ CARD EXPIRY\nTEMPORÁRIA\n31 05 2023\nOBSERVAÇÕES/ REMARKS\nATIVIDADE ALTAMENTE QUALIFICADA\nPRT\n648743\nRESIDENCE PERMIT\n");
        const expected: string[]= [ "21 07 1992", "31 05 2023" ];
        expect(result).to.deep.equals(expected);
    });

});