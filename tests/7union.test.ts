describe("union", function() {
   it("should be an union", function() {
      let sample: number | string | boolean = "Lamborgini";
      sample = 100;
      sample = true;

      // Error
      // sample = ["Helllo World"];

      console.info(sample);
   });

   it("should be validated", function() {

      // Validating union
      const process = (value: string | number | boolean) => {
         if (typeof value === 'string') {
            return value.toUpperCase();
         } else if (typeof value === 'number') {
            return value + 1;
         } else {
            return !value;
         }
      }
      
      let sample: number | string | boolean = "Lamborgini";

      expect(process("Hello World")).toBe("HELLO WORLD"); 
      expect(process(1)).toBe(2); 
      expect(process(false)).toBe(true); 
   })
});