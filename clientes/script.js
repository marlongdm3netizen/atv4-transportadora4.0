// FUNÇÃO DE COMPRA

function comprar(produto) {

  // SALVA O PRODUTO
  localStorage.setItem(
    "produtoSelecionado",
    produto
  );

  // REDIRECIONA
  window.location.href = "compra.html";
}


// CARREGAR PRODUTO NA TELA DE COMPRA

if (document.getElementById("produto")) {

  document.getElementById("produto").value =
    localStorage.getItem("produtoSelecionado");
}


// SALVAR PEDIDO

const form =
  document.getElementById("formCompra");

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    // OBJETO PEDIDO
    const pedido = {

      nome:
        document.getElementById("nome").value,

      telefone:
        document.getElementById("telefone").value,

      endereco:
        document.getElementById("endereco").value,

      produto:
        document.getElementById("produto").value,

      status: "Pendente"
    };

    // PEGA PEDIDOS
    let pedidos =
      JSON.parse(localStorage.getItem("pedidos"))
      || [];

    // ADICIONA PEDIDO
    pedidos.push(pedido);

    // SALVA
    localStorage.setItem(
      "pedidos",
      JSON.stringify(pedidos)
    );

    alert("Pedido realizado com sucesso!");

    // REDIRECIONA
    window.location.href = "index.html";
  });
}


// DASHBOARD

function atualizarDashboard() {

  const pedidos =
    JSON.parse(localStorage.getItem("pedidos"))
    || [];

  let rota = 0;
  let pendente = 0;
  let entregue = 0;

  pedidos.forEach(pedido => {

    if (pedido.status === "Em rota") {

      rota++;
    }

    if (pedido.status === "Pendente") {

      pendente++;
    }

    if (pedido.status === "Entregue") {

      entregue++;
    }
  });

  // ATUALIZA HTML
  if (document.getElementById("rota")) {

    document.getElementById("rota").innerText =
      rota;

    document.getElementById("pendente").innerText =
      pendente;

    document.getElementById("entregue").innerText =
      entregue;
  }
}

atualizarDashboard();


// PESQUISA DE PRODUTOS

function filtrarProdutos() {

  // TEXTO PESQUISADO
  const pesquisa =
    document.getElementById("pesquisa")
    .value
    .toLowerCase();

  // TODOS OS PRODUTOS
  const produtos =
    document.querySelectorAll(".produto");

  produtos.forEach(produto => {

    // TEXTO DO PRODUTO
    const nomeProduto =
      produto.innerText.toLowerCase();

    // FILTRO
    if (nomeProduto.includes(pesquisa)) {

      produto.style.display = "block";

    } else {

      produto.style.display = "none";
    }
  });
}