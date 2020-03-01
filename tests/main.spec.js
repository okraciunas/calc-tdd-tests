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

    it(`should return the value "0" when "sum(0)"`, () => {
      expect(calc.sum(0)).to.be.equal(0);
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

  describe("#mult(...args)", () => {
    it(`should return the value "0" when "mult()"`, () => {
      expect(calc.mult()).to.be.equal(0);
    });

    it(`should return the value "0" when "mult(0)"`, () => {
      expect(calc.mult(0)).to.be.equal(0);
    });

    it(`should return the value "4" when "mult(4)"`, () => {
      expect(calc.mult(4)).to.be.equal(4);
    });

    it(`should return the value "0" when "mult(4, 0)"`, () => {
      expect(calc.mult(4, 0)).to.be.equal(0);
    });

    it(`should return the value "4" when "mult(2, 2)"`, () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });

    it(`should return the value "1" when "mult(1, 1, 1, 1)"`, () => {
      expect(calc.mult(1, 1, 1, 1)).to.be.equal(1);
    });

    it(`should return the value "2" when "mult(2, 1, 1)"`, () => {
      expect(calc.mult(2, 1, 1)).to.be.equal(2);
    });

    it(`should return the value "120" when "mult(2, 3, 4, 5)"`, () => {
      expect(calc.mult(2, 3, 4, 5)).to.be.equal(120);
    });

    it(`should return the value "60" when "mult(6, 10)"`, () => {
      expect(calc.mult(6, 10)).to.be.equal(60);
    });
  });

  describe("#div(...args)", () => {
    it(`should return the value "0" when "div()"`, () => {
      expect(calc.div()).to.be.equal(0);
    });

    it(`should return the value "0" when "div(0)"`, () => {
      expect(calc.div(0)).to.be.equal(0);
    });

    it(`should return the value "4" when "div(4)"`, () => {
      expect(calc.div(4)).to.be.equal(4);
    });

    it(`should return the value "Não é possível realizar uma divisão por 0." when "div(4, 0)"`, () => {
      expect(calc.div(4, 0)).to.be.equal(
        "Não é possível realizar uma divisão por 0."
      );
    });

    it(`should return the value "1" when "div(2, 2)"`, () => {
      expect(calc.div(2, 2)).to.be.equal(1);
    });

    it(`should return the value "1" when "div(1, 1, 1, 1)"`, () => {
      expect(calc.div(1, 1, 1, 1)).to.be.equal(1);
    });

    it(`should return the value "2" when "div(2, 1, 1)"`, () => {
      expect(calc.div(2, 1, 1)).to.be.equal(2);
    });

    it(`should return the value "0.03333333333333333" when "div(2, 3, 4, 5)"`, () => {
      expect(calc.div(2, 3, 4, 5)).to.be.equal(0.03333333333333333);
    });

    it(`should return the value "5" when "div(300, 2, 5, 3)"`, () => {
      expect(calc.div(300, 2, 5, 3)).to.be.equal(10);
    });

    it(`should return the value "0.5" when "div(5, 10)"`, () => {
      expect(calc.div(5, 10)).to.be.equal(0.5);
    });
  });
});
