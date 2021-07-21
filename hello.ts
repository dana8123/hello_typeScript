// 객체의 형태를 명시적으로 나타내기 위함
interface User {
	name: string;
	id: number;
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user: User = new UserAccount("Murphy", 1);

//-- cut --
/*const user: User = {
	name: "Hayes",
	id: 0,
};


type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
*/

/*
interface Point {
	x: number;
	y: number;
}

function printPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
printPoint(point);
*/

/*
interface Point {
	x: number;
	y: number;
}

function printPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

const point3 = { x: 12, y: 26, z: 28 };
printPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect);

const color = { hex: "#187ABF" };
printPoint(color); // error
*/

interface Point {
	x: number;
	y: number;
}

function printPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}
