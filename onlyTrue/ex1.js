const obj = [
    { item1: true, item2: true, item3: true },
    { item1: true, item2: false, item3: true },
    { item1: true, item2: true, item3: true },
    { item1: true, item2: true, item3: true },
]

const filter = obj.filter((obj) => Object.values(obj).filter(Boolean).length === 3)
console.log(filter)

const result = obj.filter((item) => {
    const values = Object.values(item);
    return values.length === 3 && values.every(Boolean);
});

console.log(result);

