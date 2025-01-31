import { Department, Person } from "../src/type-alias";

describe("Opsional Properties", function() {
   it("should be an optional properties", function() {
      const secondDepartment: Department = {
         id: 2,
         name: "Second Department",
         isValidated: true
      }
      
      const person2: Person = {
         id: "PRSN2",
         name: "Person 2",
         age: 30,
         address: "Bekasi",
         department: secondDepartment
      }

      console.info(secondDepartment);
      console.info(person2);
   });

   it("should be null and undefined", function() {
      const sayHello = (name?: string | null) => {
         if(name) {
            console.info(`Hello ${name}`);
         } else {
            console.info(name);
         }
      }

      sayHello("Keisin");
      let name: string | undefined = undefined;
      sayHello(name);
      sayHello(null);
   });
});