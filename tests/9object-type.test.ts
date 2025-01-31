describe("Object Type", function() {
   it("should be an object type", function() {
      const car: { name: string, engine: string, hasTurbo: boolean, maxSpeedInKm: number } = {
         name: "Lamborgini",
         engine: "v8",
         hasTurbo: true,
         maxSpeedInKm: 300
      }

      console.info(car);
   })
});