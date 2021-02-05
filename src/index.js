module.exports = function toReadable (number) {
  var result;
  var numbers ={
	0: "zero",
  	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
 	90: "ninety",
	100: "hundred"

  };

  if(number<=19){ return numbers[number];}
  if(number<100){ return (numbers[parseInt(Math.floor(number/10)*10)] + (number%10 !==0 ? " "+numbers[number%10]: ""));}
  let numberString = number.toString();
  if(numberString[1]=="0" && numberString[2]=="0") {return numbers[parseInt(numberString[0])]+" hundred";} 
  else {return (numbers[parseInt(numberString[0])]+" hundred " + toReadable(parseInt(numberString[1]+numberString[2])));}
}
