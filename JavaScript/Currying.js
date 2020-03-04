function f (greeting){
    return function(name){
        console.log(greeting + " " + name);
    }
}

// let r1 = f("Merhaba");
// let r2 = r1("Gani");
console.log(f("Merhaba")("Gani"));