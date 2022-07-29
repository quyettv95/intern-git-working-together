function returnMoney(money) {
  let money500 = 0;
  let money200 = 0;
  let money100 = 0;
  let money50 = 0;
  let money20 = 0;
  let money10 = 0;
  while (money != 0) {
    if (money >= 500) {
      money -= 500;
      money500++;
    } else if (money >= 200) {
      money -= 200;
      money200++;
    } else if (money >= 100) {
      money -= 100;
      money100++;
    } else if (money >= 50) {
      money -= 50;
      money50++;
    } else if (money >= 20) {
      money -= 20;
      money20++;
    } else if (money >= 10) {
      money -= 10;
      money10++;
    }
  }

  console.log(money500 + " to 500");
  console.log(money200 + " to 200");
  console.log(money100 + " to 100");
  console.log(money50 + " to 50");
  console.log(money20 + " to 20");
  console.log(money10 + " to 10");
}

returnMoney(660);
