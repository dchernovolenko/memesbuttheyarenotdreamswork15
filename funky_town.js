var fib = function fibonacci(num){
    if (num = 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}


var gcdcalc= function gcd(a, b){
    if (b != 0) {
        return gcd(b, a % b);
    } 
    else {
        return a;
    }
}

var list = ["gordon", "daniel", "dw", "yuri", "sayori", "monika", "natsuki"]
var rand = function randomstudent(){
    return list[Math.trunc(Math.random() * list.length)]
}
