import sayHello from "../src/say-hello";

describe("sayHello", function() {
   it("should say Hello Keisin", function() {
      const name = "Keisin";
      const sayHelloWord = sayHello(name);
      expect(sayHelloWord).toBe("Hello Keisin");
   })
});