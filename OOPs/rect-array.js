class rect {
  hight;
  width;

  constructor(hi, wi) {
    this.hight = hi;
    this.width = wi;
  }

  calculateArea() {
    return this.hight * this.width;
  }
  calculateParameter() {
    return 2 * (this.hight * this.width);
  }
  displayDetails() {
    console.log(`Height: ${this.hight} , Width: ${this.width}`);
  }
}
const rect1 = new rect(10, 5);
const rect2 = new rect(20, 10);
const rect3 = new rect(30, 15);

let rectangles = [];
rectangles.push(rect1, rect2, rect3);

function printRectangles(rectangles) {
  for (const rectangle of rectangles) {
    console.log(rectangle.calculateArea());
    console.log(rectangle.calculateParameter());
    rectangle.displayDetails();
  }
}
printRectangles(rectangles);
