'use strict';
{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    discount: 0,
    add() {
      const tempCart = {
        id: 0,
        product: 0,
        count: 0,
        price: 0,
      };
      tempCart.id = this.items.length + 1;
      tempCart.product = prompt('Введите товар:');
      tempCart.price = +prompt('Введите цену товара:');
      tempCart.count = +prompt('Введите количество товара:', 1);
      this.items.push(tempCart);
      prompt('Ещё товар? да/нет').toLowerCase().trim() == 'да' ? this.add() : this.setDiscount = prompt('Введите промокод:');
    },
    calculateItemPrice1() {
      this.totalPrice = this.items.reduce((total, item) => total += item.count * item.price, 0);
      this.count = this.items.reduce((totalCount, item) => totalCount += item.count, 0);
      this.print();
    },
    print() {
      console.log('JSON: ', JSON.stringify(this.items));
      console.log('Общая сумма корзины:', this.totalPrice);
      console.log('Общее количество товаров:', this.count);
      this.clear();
    },
    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
      console.log('Корзина пуста:', JSON.stringify(this.items));
      console.log('Общая сумма корзины:', this.totalPrice);
      console.log('Общее количество товаров:', this.count);
      console.log('JSON: ', JSON.stringify(this.items));
    },
    get calculate() {
      this.count = this.items.reduce((totalCount, item) => totalCount += item.count, 0);
      this.totalPrice = this.items.reduce((total, item) => total += item.count * item.price, 0);
      this.totalPrice = this.totalPrice - this.totalPrice * this.discount / 100;
      this.print();
      return this.totalPrice;
    },
    set setDiscount(value) {
      if (value === 'METHED') this.discount = 15;
      if (value === 'NEWYEAR') this.discount = 21;
      console.log(this.discount);
      return this.calculate;
    },
  };
  cart.add();
}