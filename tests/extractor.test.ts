import { Extractor } from "../src/extractor";
import { expect } from "chai";

describe("validators unit tests", (): void => {
    const extractor = new Extractor();
    it("extract nifs from text", (): void => {
        const result: RegExpMatchArray = extractor.extractNIFs("510096328");
        expect(result).exist;
    });

    it("extract CC's from text", (): void => { 
        const result: RegExpMatchArray = extractor.extractCCs("37527398 0 ZV1");
        expect(result).exist;
    });

    it("extract BIs from text", (): void => { 
        const result: RegExpMatchArray  = extractor.extractBIs("900000007");
        expect(result).exist;
    });

    it("extract Niss from text", (): void => { 
        const result: RegExpMatchArray  = extractor.extractNISSs("12028701347");
        expect(result).exist;
    });

    it("extract Dates from text", (): void => { 
        const result: RegExpMatchArray  = extractor.extractDates("TÍTULO DE RESIDÊNCIA 87167L1M5\nPRTO\nPKUAKE\n87167L1M5\nAPELIDOS Nomes/ SURNAMES Forenames\nESTEVES VIANA\nPaulo Victor\nSEXO/\nSEX\nNACIONALIDADE/\nNATIONALITY\nDATA NASC./\nBIRTH DATE\nBRA\n21 07 1992\nTIPO DE TÍTULO/ TYPE OF PERMIT\nVALIDADE DO CARTÃO/ CARD EXPIRY\nTEMPORÁRIA\n31 05 2023\nOBSERVAÇÕES/ REMARKS\nATIVIDADE ALTAMENTE QUALIFICADA\nPRT\n648743\nRESIDENCE PERMIT\n");
        expect(result).exist;
    });

});