const calculator = {
    add: function(a, b) {
        return (a + b);
    },

    minus: function(a, b) {
        return (a - b);
    },

    multiple: function(a, b) {
        return (a * b);
    },

    division: function(a, b) {
        return (a / b);
    },

    pow: function(a, b) {
        return (a ** b);
    },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.multiple(10, minusResult);
const divideResult = calculator.division(timesResult, plusResult);
const powerResult = calculator.pow(divideResult, minusResult);

console.log(plusResult);
