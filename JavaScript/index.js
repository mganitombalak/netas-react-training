var person = 'Mehmet Gani';

console.log(person);

function A() {
    var person ='Ali Berk Alparslan'; 
    console.log(person);
    B(person);
}

function B(person_name){
    console.log(person_name);
}

A();