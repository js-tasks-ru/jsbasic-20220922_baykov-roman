
let calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function(a, b) {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
