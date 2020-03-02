// var person = {
//     name: 'Gani',
//     surname: 'Tombalak'
// };

function Person(pName, pSurname) {
    this.name = pName;
    this.surname = pSurname;
    this.getFullName = function () {
        return this.name + " " + this.surname;
    }
}

class Person2{
    constructor(Name,Surname){
        this.name=Name;
        this.surname=Surname;
    }
}
var p2 = new Person2('Gani','Tombalak');
console.log(p2.name + " " + p2.surname );
var p = new Person('Ali Berk', 'Alparslan');
// p.name='Test';
// p.surname='Test2';
console.log(p.name);
console.log(p.surname);
console.log(p.getFullName);
console.log(p.getFullName());