const expect = require("chai").expect;
const calc = require("../src/main");

const shouldExistMethod = method => {
  expect(calc[method]).to.exist;
  expect(calc[method]).to.be.a("function");
};

describe("Calc", () => {
  describe("Smoke tests", () => {
    it("should exist `calc` lib", () => {
      expect(calc).to.exist;
    });

    it(`should exist a method called "sum"`, () => {
      shouldExistMethod("sum");
    });

    it(`should exist a method called "sub"`, () => {
      shouldExistMethod("sub");
    });

    it(`should exist a method called "mult"`, () => {
      shouldExistMethod("mult");
    });

    it(`should exist a method called "div"`, () => {
      shouldExistMethod("div");
    });
  });
});
