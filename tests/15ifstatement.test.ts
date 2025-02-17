describe("If statement", function () {
  it("should be an if statement", function () {
    const examValue = 100;
    if (examValue > 80) {
      console.info("better");
    } else if (examValue < 80 && examValue > 60) {
      console.info("good");
    }
  });

  it("should be a ternary operator", function () {
    const examValue = 70;
    const result = examValue >= 65 ? "good" : "better";
    console.info(result);
  });

  it("should be a switch statement", function () {
    const category = "warning";
    function printResult(category: string): string {
      switch (category) {
        case "success":
          return "Print Succes";
          break;
        case "warning":
          return "Print Warning";
          break;
        case "danger":
          return "Print Danger";
          break;
        default:
          return "Print Undefined";
          break;
      }
    }
    console.info(printResult(category));
  });
});
