export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundTo2(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area: number
    = Math.sqrt(semiperimeter
    * (semiperimeter - this.a)
    * (semiperimeter - this.b)
    * (semiperimeter - this.c));

    return roundTo2(area);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || ((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
      throw new Error('Arguments are not valid');
    }
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return roundTo2(area);
  }

  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (radius <= 0) {
      throw new Error('Arguments are not valid');
    }
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  getArea(): number {
    const area: number = this.width * this.height;

    return roundTo2(area);
  }

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Arguments are not valid');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
