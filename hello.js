var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
function printPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point3 = { x: 12, y: 26, z: 28 };
printPoint(point3);
var rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect);
var color = { hex: "#187ABF" };
printPoint(color);
