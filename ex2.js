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
    if (typeof tarefaAssincrona !== "function") {
      throw new Error("Cada tarefa deve ser uma função assíncrona.");
    }

    const novaTarefa = async () => {
      try {
        await tarefaAssincrona();
        console.log("Tarefa concluída com sucesso.");
      } catch (error) {
        console.error("Erro durante a execução da tarefa:", error);
      }
    };

    await novaTarefa();
    await new Promise(resolve => setTimeout(resolve, 2000));
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
