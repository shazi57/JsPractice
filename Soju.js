var soju = { 'ap': 17.8, 'ml': 300 };
var heineken = { 'ap': 5, 'ml': 709 };

function whatIsAPperML(drink) {
    return (drink['ap'] / drink['ml']);
}


sojuOne = whatIsAPperML(soju);
heiOne = whatIsAPperML(heineken)

console.log(`alcohol per milliliter for soju is ${sojuOne} and for heineken is ${heiOne}`);
sojuQ = soju['oz'];
heiQ = heineken['oz'];

function whichIsStronger(thisD, thatD) {
    return thisD > thatD;
}
console.log(sojuOne * sojuQ, heiOne * heiQ);
console.log(whichIsStronger(sojuOne * sojuQ, 3 * heiOne * heiQ));