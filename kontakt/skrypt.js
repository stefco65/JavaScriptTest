var a = 20; //zmienna globalna

function test() {
    var a = 30; //zmienna lokalna
    console.log(a); //30
}
test();

console.log(a);    //20