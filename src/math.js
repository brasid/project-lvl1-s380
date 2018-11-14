const isEven = number => (number % 2 === 0);

const getResult = (num1, num2, operator) => {
  switch (operator) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getRandomNum = () => Math.floor(Math.random() * 100);

const getRandomOperator = () => {
  const num = Math.floor(Math.random() * 3); // expect output 0, 1 or 2
  switch (num) {
    case (0):
      return '+';
    case (1):
      return '-';
    default:
      return '*';
  }
};


export {
  isEven,
  getResult,
  getRandomNum,
  getRandomOperator,
};
