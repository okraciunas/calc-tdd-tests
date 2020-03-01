const expect = require("chai").expect;
const calc = require("../src/main");

describe("Calc", () => {
  describe("Smoke tests", () => {
    it(`should exist "calc" lib`, () => {
      expect(calc).to.exist;
    });

    it(`should exist a method called "sum"`, () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a("function");
    });

    it(`should exist a method called "sub"`, () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a("function");
    });

    it(`should exist a method called "mult"`, () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a("function");
    });

    it(`should exist a method called "div"`, () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a("function");
    });
  });

  describe("#sum(...args)", () => {
    it(`should return the value "0" when "sum()"`, () => {
      expect(calc.sum()).to.be.equal(0);
    });

    it(`should return the value "4" when "sum(4)"`, () => {
      expect(calc.sum(4)).to.be.equal(4);
    });

    it(`should return the value "4" when "sum(4, 0)"`, () => {
      expect(calc.sum(4, 0)).to.be.equal(4);
    });

    it(`should return the value "4" when "sum(2, 2)"`, () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });

    it(`should return the value "4" when "sum(1, 1, 1, 1)"`, () => {
      expect(calc.sum(1, 1, 1, 1)).to.be.equal(4);
    });

    it(`should return the value "4" when "sum(2, 1, 1)"`, () => {
      expect(calc.sum(2, 1, 1)).to.be.equal(4);
    });
  });

  describe(`#sub(...args)`, () => {
    it(`should return the value "0" when "sub()"`, () => {
      expect(calc.sub()).to.be.equal(0);
    });

    it(`should return the value "0" when "sub(0)"`, () => {
      expect(calc.sub(0)).to.be.equal(0);
    });

    it(`should return the value "4" when "sub(4)"`, () => {
      expect(calc.sub(4)).to.be.equal(4);
    });

    it(`should return the value "4" when "sub(4, 0)"`, () => {
      expect(calc.sub(4, 0)).to.be.equal(4);
    });

    it(`should return the value "0" when "sub(2, 2)"`, () => {
      expect(calc.sub(2, 2)).to.be.equal(0);
    });

    it(`should return the value "-2" when "sub(1, 1, 1, 1)"`, () => {
      expect(calc.sub(1, 1, 1, 1)).to.be.equal(-2);
    });

    it(`should return the value "0" when "sub(2, 1, 1)"`, () => {
      expect(calc.sub(2, 1, 1)).to.be.equal(0);
    });

    it(`should return the value "-4" when "sub(6, 10)"`, () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });
});
