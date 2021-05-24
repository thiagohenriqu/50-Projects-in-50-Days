var variable1 = {
  fastFood: "spa",
  length: 10,
};

Object.freeze(variable1);
variable1.price = 50;
delete variable1.length;

console.log(variable1);
