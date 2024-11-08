// const prompt = require("prompt-sync")({ signit: true });
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar");
    return "hi";
  };
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2;
  }
  
  const sum = (p, q) => {
    return p + q;
  };
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(v);
  console.log("One plus Average of a and b is ", onePlusAvg(a, b)); //a=1,b=2
  console.log("One plus Average of b and c is ", onePlusAvg(b, c)); //b=2,c=3
  console.log("One plus Average of a and c is ", onePlusAvg(a, c)); //a=1,c=3
  console.log(sum(9, 7));