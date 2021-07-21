let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let fullName: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello my name is ${fullName} I'll be ${
	age + 1
} years old next month`;

//리스트
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//튜플
let x: [string, number];
x = ["hello", 10];

console.log(x[0].substring(1));

enum Color {
	Red = 3,
	Green,
	Blue,
}
let c: Color = Color.Green;
let colorName: string = Color[4];
//console.log(c);
//console.log(colorName);

//Any
let notSure: any = 4;
notSure = "Maybe a string instead";
notSure = false;

notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
//prettySure.toFixed();

function warnUser(): void {
	console.log("This is my wazrning message");
}

let unusable: void = undefined;
unusable = null;
