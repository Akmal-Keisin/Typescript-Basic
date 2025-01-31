import { Customer, CustomerType } from "../src/enum";

describe("Enum", function() {
   it("should be an enum", function() {
      const customer: Customer = {
         id: 1,
         name: "Customer 1",
         type: CustomerType.PLATINUM
      }

      console.info(customer);
   });
});