window.onload = () => {
  let number = Math.floor(Math.random() * 13 + 1);
  switch (number) {
    case 1:
      number = "A";
      break;
    case 11:
      number = "J";
      break;
    case 12:
      number = "Q";
      break;
    case 13:
      number = "K";
      break;
  }

  let symbol = Math.floor(Math.random() * 4 + 1);
  switch (symbol) {
    case 1:
      symbol = "♦";
      break;
    case 2:
      symbol = "♥";
      break;
    case 3:
      symbol = "♠";
      break;
    case 4:
      symbol = "♣";
      break;
  }

  const element = document.querySelector(".number");
  element.innerHTML = number;

  const elementTop = document.querySelector(".top-icon");

  const elementBottom = document.querySelector(".bottom-icon");

  const color = Math.random() < 0.5 ? "red" : "black";
  elementTop.innerHTML = symbol;
  elementTop.style.color = color;

  elementBottom.innerHTML = symbol;
  elementBottom.style.color = color;
};
