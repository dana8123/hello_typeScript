var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = "red";
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello my name is " + fullName + " I'll be " + (age + 1) + " years old next month";
//리스트
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//튜플
var x;
x = ["hello", 10];
console.log(x[0].substring(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[4];
//console.log(c);
//console.log(colorName);
//Any
var notSure = 4;
notSure = "Maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
//prettySure.toFixed();
function warnUser() {
    console.log("This is my wazrning message");
}
var unusable = undefined;
unusable = null;
