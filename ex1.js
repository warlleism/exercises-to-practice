let data = [];

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();
    data = responseData.map(({ id, title }) => ({
      id,
      title: title.slice(0, 20) + "...",
    }));
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

(async () => {
  await fetchData();
  console.log(data);
})();

// desafio monetário

const transacoes = [
  { id: 1, tipo: "receita", valor: 5000 },
  { id: 2, tipo: "despesa", valor: 1500 },
  { id: 3, tipo: "receita", valor: 3000 },
];

const calcularSaldoReduce = (transacoes) => {
  const data = {
    saldoTotal: 0,
    saldoPorTipo: {
      receita: 0,
      despesa: 0,
    },
  };

  //reduce

  const resultadoFinal = transacoes.reduce((saldoAcumulado, transacao) => {
    saldoAcumulado.saldoTotal = transacao.tipo === "despesa" ?
      saldoAcumulado.saldoTotal - transacao.valor :
      saldoAcumulado.saldoTotal + transacao.valor;

    saldoAcumulado.saldoPorTipo.receita = transacao.tipo === "receita" ?
      saldoAcumulado.saldoPorTipo.receita + transacao.valor :
      saldoAcumulado.saldoPorTipo.receita;

    saldoAcumulado.saldoPorTipo.despesa = transacao.tipo === "despesa" ?
      saldoAcumulado.saldoPorTipo.despesa + transacao.valor :
      saldoAcumulado.saldoPorTipo.despesa;

    return saldoAcumulado;
  }, data);

  return resultadoFinal;
};

console.log(calcularSaldoReduce(transacoes));

//forEach

const calcularSaldoForeach = (transacoes) => {
  const data = {
    saldoTotal: 0,
    saldoPorTipo: {
      receita: 0,
      despesa: 0,
    },
  };

  transacoes.forEach((e) => {
    data.saldoTotal = e.tipo === "despesa" ? data.saldoTotal - e.valor : data.saldoTotal + e.valor;
    data.saldoPorTipo.receita = e.tipo === "receita" ? data.saldoPorTipo.receita + e.valor : data.saldoPorTipo.receita;
    data.saldoPorTipo.despesa = e.tipo === "despesa" ? data.saldoPorTipo.despesa + e.valor : data.saldoPorTipo.despesa;
  });

  return data;
};

console.log(calcularSaldoForeach(transacoes));

