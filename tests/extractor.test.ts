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


    it("extract passaport id from text", (): void => { 
        const result: string[]  = extractor.extractPassaports("República Portuguesa Portuguese Republic République Portugaise\nPassaporte\nPassport\nPasseport\nTПро Туре\nCódigo do Pais Code\nPassaporte ns Passport no. Passeport ne\nPC\nPRT\nCA177640\n1. Apelido(s) Surname Nom\nDE AGUIAR ALDIM\n2. Nome(s) próprio(s) Given names Prénoms\nanob MARIA LUÍSA\n3. Nacionalidade Nationality Nationalité\n4. Altura Height Taille\nJumgna\nPORTUGUESA\n1.72 m\n5. Data de nascimento Date of birth Date de naissance\n6. No de identificação pessoal Parsonal no. N9 personnel\n16.12.1985\n12819059\n7. Sexo Sex Sexe\n8. Local de nascimento Place of birth Lieu de naissance\nLISBOA*LISBOA\n9. Data da emissão Date of issue Date de délivrance\n10. Autoridade Authority Acitorité\n03.09.2018\nSEF SERV ESTR E FRONTEIRAS\n12. Assinatura do titular\nHolder's signature Signature du titulaire\n11. Válido até Dote of expiry Date d'expiration\n03.09.2023\n16.12.1985\nP\u003cPRTDE\u003cAGUIAR\u003cALDIM\u003c\u003cMARIA\u003cLUISA\u003c\u003c\u003c\u003c\u003c\u003c\u003c\u003c\u003c\u003c\u003c\nCA177640\u003c9PRT8512165 F230903912819059\u003c\u003c\u003c\u003c\u003c\u003c76\n03le0112018\n");
        const expected: string[]= [ "CA177640" ];
        expect(result).to.deep.equals(expected);
    });

});