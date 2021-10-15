import { environment } from "./environments/environment";

export class Extractor {

    extractNIFs(fullText: string): RegExpMatchArray | null {
        const reg = new RegExp(environment.regex_nif, "g");
        const arrNifs = fullText.match(reg);
        return arrNifs;
    }

    extractCCs(fullText: string): RegExpMatchArray | null {
        const reg = new RegExp(environment.regex_cc, "g");
        const arrCCs = fullText.match(reg);
        return arrCCs;
    }

    extractBIs(fullText: string):  RegExpMatchArray | null  {
        const reg = new RegExp(environment.regex_bi, "g")
        const arrBIs = fullText.match(reg);
        return arrBIs;
    }

    extractNISSs(fullText: string):  RegExpMatchArray | null  {
        const reg = new RegExp(environment.regex_niss, "g")
        const arrNISSs = fullText.match(reg);
        return arrNISSs;
    }

    extractDates(fullText: string):  RegExpMatchArray | null  {
        const reg = new RegExp(environment.regex_dates, "g")
        const arrDates = fullText.match(reg);
        return arrDates;
    }
}