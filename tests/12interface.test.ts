import { GroundTransportation, Seller } from "../src/interface"

describe("Interface", function() {
   it("should be an interface", function() {
      let seller1: Seller = {
         id: 1,
         name: "Seller 1",
         address: "Aute sit laboris nostrud labore nostrud eiusmod. Exercitation in magna esse aliquip cillum anim excepteur exercitation voluptate occaecat. Aliquip duis Lorem cillum id dolor do nisi adipisicing eiusmod aliquip dolore in."
      }

      console.info(seller1);
   });

   it("should be a readonly interface", function() {
      let seller2: Seller = {
         id: 2,
         name: "Seller 2",
         address: "Sit nostrud nisi et laborum ex sint tempor cupidatat laboris voluptate culpa adipisicing eiusmod non. Ea Lorem ad enim quis laborum. Anim aliqua sit enim ipsum eu non fugiat in ut nulla tempor dolor. Magna officia minim elit esse. Fugiat elit qui exercitation nulla sunt consectetur duis. Nulla dolor veniam sunt sunt qui tempor occaecat sint aute minim proident consequat. Laborum eiusmod pariatur occaecat minim consequat incididunt sit sunt in.",
         nib: "123456789",
         npwp: "123456789"
      }

      // error 
      // seller2.nib = "8272134132";
      // seller2.npwp = "2821273123";
   });

   it("should be a function interface", function() {
      interface isNumberEven {
         (value: number): boolean
      }

      const isNumberEven: isNumberEven = (value: number): boolean => {
         return (value % 2) == 0 ? true : false; 
      }

      expect(isNumberEven(10)).toBe(true);
      expect(isNumberEven(11)).toBe(false);
   });

   it("should be an indexable array", function() {
      interface StringArray {
         [index: number]: string
      }

      interface Person {
         [index: string]: string
      }

      const cars: StringArray = ["Lamborgini", "Audi", "Toyota", "Ferrari"];
      const person: Person = {
         name: "Keisin",
         address: "Est adipisicing sint laboris do fugiat tempor magna excepteur nostrud sint.",
         
         // Error
         // age: 10
      }
      console.info(cars);
   });

   it("should extends interface", function() {
      const car: GroundTransportation = {
         id: "firstCar",
         name: "Lamborgini",
         transportationNumber: 102341,
         engineStart: false,
         tiresTotal: 4
      }

      console.info(car);
   });

   it("should be funciton in an interface", function() {
      interface Car {
         id: number,
         name: string,
         engineStart(start: boolean): string
      }

      const lamborgini: Car = {
         id: 12312,
         name: "Lamborgini",
         engineStart: (start: boolean): string => {
            return "Engine " + start ? "started" : "start the engine";
         }
      } 
      console.info(lamborgini.engineStart(true));
   });

   it("should be an intersection types", function() {
      interface HasName {
         name: string
      }

      interface HasId {
         id: string
      }

      // The case if we need those two interface but we don't really need to add some attributes.
      // Instead of create new interface and extends those two interface like :
      interface Person extends HasName, HasId {}

      // We can use intersection types like
      type Person2 = HasName & HasId

      // we can simply use that just like usual
      const person: Person2 = {
         id: "123412DS",
         name: "Keisin"
      }

      console.info(person);
   });

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
      console.info(person2);
   });
})