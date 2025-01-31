import { Department, Person, ID } from "../src/type-alias";

describe("Type Alias", function() { 
   it("should be aliases", function() {
      const firstDepartment: Department = {
         id: 1,
         name: "First Department",
         isValidated: true
      } 

      const keisin: Person = {
         id: "PRSN23",
         name: "Akmal Keisin Alfateh",
         age: 21,
         department: firstDepartment
      }

      console.info(firstDepartment);
      console.info(keisin);
   });
});