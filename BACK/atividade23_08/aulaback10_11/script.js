fetch("http://localhost:3000/produtos")
  .then((resposta) => {
    if (resposta.status === 200) {
      resposta.json().then((dados) => {
        const div = document.querySelector("#root");

        // Remover elementos anteriores
        div.innerHTML = "";

        dados.forEach((produto) => {
          const card = document.createElement("div");
          card.classList.add("card");

          // Criar elementos para cada informação
          const idElement = document.createElement("p");
          idElement.textContent = `ID: ${produto.id}`;
          
          const qtdElement = document.createElement("p");
          qtdElement.textContent = `Quantidade: ${produto.qtd}`;
          
          const descElement = document.createElement("p");
          descElement.textContent = `Descrição: ${produto.desc}`;
          
          const precoElement = document.createElement("p");
          precoElement.textContent = `Preço: R$ ${produto.preco}`;

          const editButton = document.createElement("a");
          editButton.className = "edit";
          editButton.innerText = "Editar";
          editButton.href = `./formulario.html?id=${produto.id}&desc=${produto.desc}&preco=${produto.preco}&qtd=${produto.qtd}`

          // Adicionar evento de clique para o botão "editar"
          editButton.addEventListener("click", () => {
            // Lógica para editar o produto
            console.log("Editar produto: ", produto.id);
          });

          const deleteButton = document.createElement("button");
          deleteButton.className = "delete";
          deleteButton.innerText = "Excluir";
          deleteButton.addEventListener("click" , ()=>{
            fetch(`http://localhost:3000/produtos/excluir/${produto.id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type' : 'application/json'
        },
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
          })
          // Adicionar evento de clique para o botão "excluir"
          deleteButton.addEventListener("click", () => {
            // Lógica para excluir o produto
            console.log("Excluir produto: ", produto.id);
          });

          // Adicionar elementos ao card
          [idElement, qtdElement, descElement, precoElement, editButton, deleteButton].forEach((element) => {
            card.appendChild(element);
          });

          // Adicionar o card à div principal
          div.appendChild(card);
        });
      });
    }
  });
