const pedidos =
  JSON.parse(localStorage.getItem("pedidos")) || [];

const lista =
  document.getElementById("listaPedidos");

function renderizarPedidos() {

  lista.innerHTML = "";

  pedidos.forEach((pedido, index) => {

    lista.innerHTML += `

      <tr>

        <td>${pedido.nome}</td>

        <td>${pedido.produto}</td>

        <td>${pedido.endereco}</td>

        <td>

          <select
            class="form-select"
            onchange="alterarStatus(${index}, this.value)">

            <option
              ${pedido.status === "Pendente" ? "selected" : ""}>
              Pendente
            </option>

            <option
              ${pedido.status === "Em rota" ? "selected" : ""}>
              Em rota
            </option>

            <option
              ${pedido.status === "Entregue" ? "selected" : ""}>
              Entregue
            </option>

          </select>

        </td>

      </tr>
    `;
  });
}

function alterarStatus(index, novoStatus) {

  pedidos[index].status = novoStatus;

  localStorage.setItem(
    "pedidos",
    JSON.stringify(pedidos)
  );
}

renderizarPedidos();