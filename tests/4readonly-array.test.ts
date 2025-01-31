describe("read only array", function() {
   it("should be read only array", function() {
      const fruits: readonly string[] = ["Mango", "Banana", "Orange", "Papaya"];
      
      // Error when add
      // fruits[] = "Hello World";
      
      // Not error when read
      const firstFruit: string = fruits[1];
      console.info(firstFruit);
   });
});