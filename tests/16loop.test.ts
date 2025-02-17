describe("Loop", function () {
  it("should be a for loop", function () {
    const phones: string[] = ["Xiaomi", "Samsung", "Iphone"];
    for (let i = 0; i < phones.length; i++) {
      console.info(phones[i]);
    }

    for (const phone of phones) {
      console.info(phone);
    }

    for (const index in phones) {
      console.info(phones[index]);
    }
  });

  it("should be a while loop", function () {
    let counter: number = 1;
    while (counter < 11) {
      console.info(counter);
      counter++;
      if (counter % 2 == 0) {
        continue;
      }
    }

    console.info("Start");
    let counter2: number = 1;
    do {
      console.info(counter2);
      if (counter2 % 2 == 0) {
        break;
      }
      counter2++;
    } while (counter2 < 10);
  });
});
