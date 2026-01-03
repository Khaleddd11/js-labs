function a() {
    var y;
    console.log(y);
}

function b() {
    try {
        console.log(y);
    } catch (error) {
        console.log("b: caught an error because y is not defined");
    }
}

function c() {
    var x = 10;
    var y = 20;
    console.log(y * x - 2);
}

function d() {
    var y;
    console.log(typeof y);
}

function e() {
    var x = "1";
    var y = 2;
    console.log(x + y);
}

function f() {
    var x = 1;
    var y = true;
    console.log(x + y);
}


a();
b();
c();
d();
e();
f();
