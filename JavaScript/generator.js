function* netas(number) {
    yield number;
    yield number + 10;
}
const f = netas(10);
console.log(f.next());
console.log(f.next());