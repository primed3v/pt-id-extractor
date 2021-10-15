import { Validators } from "../src/validators";
import { expect } from "chai";

describe("validators unit tests", (): void => {
    const v = new Validators();
    it("check nif valid", (): void => {
        const valid: boolean = v.validateNIF("510096328");
        expect(valid).is.equal(true);
    });

    it("check nif invalid", (): void => {
        const valid: boolean = v.validateNIF("898635550");
        expect(valid).is.equal(false);
    });

    it("check cartao cidadao valid", (): void => {
        const valid: boolean = v.validateCC("358865573ZW2");
        expect(valid).is.equal(true);
    });

    it("check cartao cidadao invalid", (): void => {
        const valid: boolean = v.validateCC("3444");
        expect(valid).is.equal(false);
    });

    it("check bi valid", (): void => {
        const v = new Validators();
        const valid: boolean = v.validateBI("900000007");
        expect(valid).is.equal(true);
    });

    it("check bi invalid", (): void => {
        const valid: boolean = v.validateBI("3444");
        expect(valid).is.equal(false);
    });

    it("check niss valid", (): void => {
        const valid: boolean = v.validateNISS("12084714971");
        expect(valid).is.equal(true);
    });

    it("check niss invalid", (): void => {
        const valid: boolean = v.validateNISS("12028701345");
        expect(valid).is.equal(false);
    });

});