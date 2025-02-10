describe("Function", function() {
   it("should be a function", function() {
      // Declare a function in typescript : 
      function sayHello(name: string): string {
         return `Hello ${name}!`;
      }

      console.info(sayHello("Akmal"));
   });

   it("should be a void function", function() {
      function sayHello2(name: string): void {
         console.info(`Hello ${name}`);
      }

      sayHello2("Akmal");
   });

   it("should be a parameter function", function() {
      function sayHello3(name: string = "Akmal"): void {
         console.info(`Hello ${name}`);
      }

      sayHello3();

      function sum(...values: number[]): number {
         let total: number = 0;
         for(const value of values) {
            total += value;
         }

         return total;
      }

      console.info(sum(1, 2, 3, 4, 5)) ;

      function sayHello4(name: string, address?: string): string {
         if (address) {
            return `Hello ${name}, you are from ${address}`;
         }

         return `Hello ${name}`;
      }

      console.info(sayHello4);
   });

   it("should be a function overloading", function() {
      function callMe(value: string): string;
      function callMe(value: number): number;
      function callMe(value: any): any {
         if (typeof value == 'string') {
            return `Hello ${value}`;
         }

         if (typeof value == 'number') {
            return 1;
         }
      }

      expect(callMe("keisin")).toBe("Hello keisin");
      expect(callMe(10)).toBe(1);
   });

   it("should be a function as parameter", function() {
      function sayHello5(name: string, filter: (value: string) => string) {
         return `Hello ${filter(name)}`;
      }

      function toUpper(value: string): string {
         return value.toUpperCase();
      }

      expect(sayHello5("Akmal", toUpper)).toBe("Hello AKMAL");
      expect(sayHello5("Akmal", (value: string): string => value.toUpperCase())).toBe("Hello AKMAL");
   })
});