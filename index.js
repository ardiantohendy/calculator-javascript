let opNUm = document.getElementById("opNum");
const resultBtn = document.getElementById("resultBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const plusOp = document.getElementById("plusOp");
const minOp = document.getElementById("minOp");
const resetBtn = document.getElementById("resetBtn");

const numConver = (number) => {
  let conver = Number(number);
  return conver;
};

//OPERATION
resetBtn.onclick = () => {
  opNUm.innerText = 0;
};

plusOp.onclick = () => {
  opNUm.innerText += plusOp.innerText;
};

minOp.onclick = () => {
  opNUm.innerText += minOp.innerText;
};

resultBtn.onclick = () => {
  let result = eval(opNUm.innerText);
  opNUm.innerText = result;
  console.log(result);
};

//NUMBER BUTTONS
num1.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num1.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 1;
    opNUm.innerText = numberPlus;
  }
};

num2.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num2.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 2;
    opNUm.innerText = numberPlus;
  }
};

num3.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num3.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 3;
    opNUm.innerText = numberPlus;
  }
};

num4.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num4.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 4;
    opNUm.innerText = numberPlus;
  }
};

num5.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num5.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 5;
    opNUm.innerText = numberPlus;
  }
};

num6.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num6.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 6;
    opNUm.innerText = numberPlus;
  }
};

num7.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num7.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 7;
    opNUm.innerText = numberPlus;
  }
};

num8.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num8.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 8;
    opNUm.innerText = numberPlus;
  }
};

num9.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num9.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 9;
    opNUm.innerText = numberPlus;
  }
};

num0.onclick = () => {
  let numberPlus;
  if (numConver(opNUm.innerText) == 0) {
    numConver((opNUm.innerText = numConver(num0.innerText)));
  } else if (numConver(opNUm.innerText) != 0) {
    numberPlus = opNUm.innerText + 0;
    opNUm.innerText = numberPlus;
  }
};
