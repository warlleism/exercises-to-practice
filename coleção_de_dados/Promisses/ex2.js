//ex 1

let itens = ["item1", "item2", "item3", "item4", "item5"];
const slice = itens.slice(0, 3);
const newItens = [];
const replace = slice.forEach((element, index) =>
  newItens.push(element.replace("item", ""))
);
itens = newItens;
console.log(itens);

//ex 2

async function chamandoTarefaAssincrona(tarefasAssincronas) {
  if (!Array.isArray(tarefasAssincronas)) {
    throw new Error("As tarefas devem ser fornecidas em um array.");
  }

  for (const tarefaAssincrona of tarefasAssincronas) {
    try {
      await tarefaAssincrona();
      console.log("Tarefa concluída com sucesso.");
    } catch (error) {
      console.error("Erro durante a execução da tarefa:", error);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

const tarefa1 = async () => {
  console.log("Iniciando tarefa 1...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Tarefa 1 concluída...");
};

const tarefa2 = async () => {
  console.log("Iniciando tarefa 2...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Tarefa 2 concluída...");
};

const arrayDeTarefas = [tarefa1, tarefa2];

chamandoTarefaAssincrona(arrayDeTarefas);

//ex 3

(async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((response) => response);
  console.log(data);
})();

//ex 4

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`Observer ${this.name} foi notificado sobre a mudança.`);
  }
}

const subject = new Subject();

const observer1 = new Observer('1');
const observer2 = new Observer('2');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers();

