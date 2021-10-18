import { environment } from "./environments/environment";

export class Util {
  public checkCCMistakes(fullText: string): RegExpMatchArray | null {
    const regZeroMistake = new RegExp(
      environment.regex_cc_letterorzero_mistake,
      "g"
    );

    let arrCCsMistake: string[] = [];

    // Zero constantly confused with "o" letter in the middle of CC  ( 8 caracter index)
    fullText.match(regZeroMistake)?.forEach((value) => {
      let simpleRes = value.replaceAll(" ", "").trim();

      if (simpleRes[8] == "o") {
        simpleRes = simpleRes.replace("o", "0");
      }
      if (simpleRes[8] == "O") {
        simpleRes = simpleRes.replace("O", "0");
      }
      arrCCsMistake.push(simpleRes);
    });

    // back array to original order
    arrCCsMistake = arrCCsMistake.reverse();
    return arrCCsMistake;
  }
}
