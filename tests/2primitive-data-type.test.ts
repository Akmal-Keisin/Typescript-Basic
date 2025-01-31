describe("primitive data type", function() {
   it("should be declared", function() {
      const name: string = "Akmal Keisin Alfateh";
      const balance: number = 1000000;
      const isAdmin: boolean = true;

      console.info(name);
      console.info(balance);
      console.info(isAdmin);
   });

   it("should be success", function() {
      let name: string = "Akmal Keisin Alfateh";
      let balance: number = 1000000;
      let isAdmin: boolean = true;

      console.info(name);
      console.info(balance);
      console.info(isAdmin);

      // name = 100;
      // balance = "Hello World";
      // isAdmin = 20; 
   });
});