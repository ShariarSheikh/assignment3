// https://github.com/ShariarSheikh/assignment3

/* task 1 = kilometerToMeter*/
function kilometerToMeter(kilometer) {
  return kilometer * 1000;
}
console.log(kilometerToMeter(2));

/* task 2 = budgetCalculator*/
function budgetCalculator(clock, phone, laptop) {
  return [clock * 50, phone * 100, laptop * 500];
}
console.log(budgetCalculator(2, 2, 2));

/* task 3 = hotelCost*/
function hotelCost(days) {
  if (days <= 10) {
    return 100 * days;
  } else if (days <= 20) {
    return 80 * days;
  } else if (days >= 21) {
    return 50 * days;
  } else {
    return "wrong value";
  }
}
console.log(hotelCost(5));

/* task 2 = megaFriend*/
function megaFriend(name) {
  var result = "";
  for (var i = 0; i < name.length; i++) {
    var element = name[i];
    if (element.length > result.length) {
      result = name[i];
    }
  }
  return result;
}
console.log(megaFriend((array = ["nahid", "shariar"])));
