describe("tuple", function() {
   it("should be a tuple", function() {
      const testTuple: readonly [string, number, boolean] = ["Hello World", 1, true];
      console.info(testTuple);
   });
});