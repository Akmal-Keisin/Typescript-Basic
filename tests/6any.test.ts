describe("any", function() {
   it("should be an any", function() {
      // Any data type, can contain "Anything" just like javascript 
      const person: any = {
         name: "Akmal Keisin Alfateh",
         age: 21,
         isMarried: false
      }

      // Not error on data type changes
      person.isMarried = 0;
      console.info(person);
   })
})