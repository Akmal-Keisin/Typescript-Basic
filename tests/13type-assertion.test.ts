describe("Type Assertion", function() {
   it("should be a type assertion", function() {
      interface Person {
         id: number,
         name: string,
         age: number
      }

      const person: any = {
         id: 1,
         name: "Keisin...",
         age: 21
      }

      const person2: Person = person as Person;
   });
});