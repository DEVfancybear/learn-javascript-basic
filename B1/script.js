var cacmonan = {
	ten: "ca",
	nguyenlieu: 'ca tuoi',
	gia: 200
};
// var mon2 = cacmonan;
// mon2.ten = "lau nuong";
// console.log(cacmonan);
// console.log(mon2);
// khai báo constructor
function MonAn (t, nl, g) {
	// body... 
	this.ten=t;
	this.nguyenlieu=nl;
	this.gia=g;
}
var mon1 = new MonAn('Ca tuoi', "ca song", 232); // từ khoá new cũng là 1 constructor
var mon3 = new MonAn('Ca Nuong', "Ca Cham", 332);
console.log(mon1);
console.log(mon3);