class Rectangle {
  width;
  hight;

  constructor(width, hight) {
    this.width = width;
    this.hight = hight;
  }
  areaOfRectangle(width,) {
    console.log(`Area of Rectangle ${this.width * this.hight}`);
  }
  patternChar(){
    let pattern = "#";
    let str=" "
    for (let i = 0; i < this.hight; i++) {
        str= str + pattern;
    }
    console.log(str);
  }
}
