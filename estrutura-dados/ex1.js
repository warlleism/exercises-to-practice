//Inverter um Array
const ex1 = [1, 2, 3, 4, 5, 6]
console.log(ex1.reverse())

//Remover Duplicatas
const ex2 = [1, 1, 2, 3, 4, 5, 5, 6]
function removeDuplicates(array) { return [...new Set(array)] }
console.log(removeDuplicates(ex2))

//Encontrar o Elemento Máximo e Mínimo

const ex3 = [1, 2, 3, 4, 5, 6]
const valorMaximo = Math.max(...ex3)
const valorMinimo = Math.min(...ex3)

console.log("Valor Maximo", valorMaximo)
console.log("Valor Minimo", valorMinimo)


//Lista ligada

const createNode = (data) => ({ data, next: null });

const appendNode = (list, data) => {
    const newNode = createNode(data);
    if (!list) {
        return newNode;
    }

    let current = list;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return list;
};

const printList = (list) => {
    let current = list;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
};

let linkedList = null;
linkedList = appendNode(linkedList, 10);
linkedList = appendNode(linkedList, 20);
linkedList = appendNode(linkedList, 30);

console.log(printList(linkedList)); 