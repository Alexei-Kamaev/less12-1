'use strict';
//не совсем понятны условия задачи
//на выходе получены требуемые данные
const rectangle = {
  width: 5,
  height: 5,
  promptValue: () => rectangle.addValue = [+prompt('Введите ширину в сантиметрах:', 5), +prompt('Введите высоту в сантиметрах:', 5)],
  set addValue (value) {
    [this.width, this.height] = value;
  },
  get area () {
    return `Площадь прямоугольника составляет:  ${this.height * this.width} см`;
  },
  get perimeter () {
    return `Периметр прямоугольника составляет:  ${(this.height + this.width) * 2} см`
  },
}
rectangle.promptValue();
console.log(rectangle.area);
console.log(rectangle.perimeter);