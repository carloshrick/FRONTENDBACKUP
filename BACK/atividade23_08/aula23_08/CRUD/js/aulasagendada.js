import { Cadastro } from "../API/Cadastro.js";

fetch("http://localhost:3000/aulas").then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((aulas)=>{
            //dados é a lista de objetos que vem da API

            const div = document.querySelector("#root")
            dados.map((aula)=>{
                const card = document.createElement("div");
                card.classList.add("card");
      
                card.innerText = `
                Nome: ${aula.nome}
                Horário: ${aula.horario}
                Idade: ${aula.idade}
                Cidade:${aula.cidade}
                Dia:${aula.dia}
              `;
    
              
              // Adicionar o card à div principal
              div.appendChild(card);
              });
            });
          }
        })