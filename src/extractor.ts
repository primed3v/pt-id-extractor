import { environment } from "./environments/environment";
import { Util } from "./util";

export class Extractor {
   util: Util;

  constructor() {
    this.util = new Util();
  }

  extractNIFs(fullText: string): string[] | null {
    const reg = new RegExp(environment.regex_nif, "g");
    const arrNifs = fullText.match(reg);
    return arrNifs;
  }

  extractCCs(fullText: string): string[] | null {
    const reg = new RegExp(environment.regex_cc, "g");
    const arrCCs = fullText.match(reg)?.map(val => { return val.replace(/ /g, "").trim()});
    if (!arrCCs) {
      const arrCCsMistakesChecked = this.util.checkCCMistakes(fullText);
      return arrCCsMistakesChecked;
    }
    else
    {
        return arrCCs;
    }
  }

  extractBIs(fullText: string): string[] | null {
    const reg = new RegExp(environment.regex_bi, "g");
    const arrBIs = fullText.match(reg);
    return arrBIs;
  }

  extractNISSs(fullText: string): string[] | null {
    const reg = new RegExp(environment.regex_niss, "g");
    const arrNISSs = fullText.match(reg);
    return arrNISSs;
  }

  extractDates(fullText: string): string[] | null {
    const reg = new RegExp(environment.regex_dates, "g");
    const arrDates = fullText.match(reg);
    return arrDates;
  }

}
