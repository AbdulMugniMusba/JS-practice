class Car {
    brand;
    model;
    year;
  
    constructor(br, mo, yr) {
      this.brand = br;
      this.model = mo;
      this.year = yr;
    }
    displayDetails() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
    let car1 = new Car("toyotta", "abd", "2005");
  car1.displayDetails();