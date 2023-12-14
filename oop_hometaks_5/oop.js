
//5.1 Circle
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  getLength() {
    return 2 * Math.PI * this.r
  }

  static getLengthFromRadius(r) {
    return 2 * Math.PI * r
  }
  
  getCopy() {
    return this
  }

  static createCircle(x,y,r) {
    return new Circle(x,y,r)
  }

  checkPointInside(x,y) {
    if ((x - this.x) * (x - this.x) +
        (y - this.y) * (y - this.y) <= this.r * this.r)
        return true;
    else
        return false;
  }

  toString() {
    console.log("Center coordinated x: " + this.x + " y: " + this.y + ". Radius is: "+ this.r);
  }
}

c = new Circle(2,4,11);
c.getLength();
Circle.getLengthFromRadius(13)
c1 = Circle.createCircle(2,6,19)
c.checkPointInside(1,1)

//5.2 Marker

class Marker {

  #colorAttr;
  #inkAmount;

  constructor(color,) {
    this.colorAttr = color;
    this.inkAmount = 100;
  }

  color() {
    return this.colorAttr;
  }

  ink() {
    return this.inkAmount;
  }

  printText(message){
    let i = 0
    do {
      if (message[i] !== ' ') {
        console.log(message[i]);
        this.inkAmount-=10;
        i++
      }
    } while (this.inkAmount > 0);
  }
  
}

m = new Marker('Green')
m.printText('I am very awesome JS programmer')