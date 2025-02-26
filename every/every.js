const text = "test, data";
const items = [
    { id: 1, name: "test", description: "test", link: "test" },
    { id: 2, name: "data", description: "test", link: "test" },
    { id: 3, name: "texto sem", description: "test", link: "test" },
];
const filtered = items.filter(item => text.split(',').some(t => item.name.toLowerCase().includes(t.trim().toLowerCase())));
console.log(filtered);
