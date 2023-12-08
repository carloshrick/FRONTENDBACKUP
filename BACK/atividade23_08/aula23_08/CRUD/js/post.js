document.querySelector("#agendarbtn")
.addEventListener("click",()=>{
const nome = document.querySelector("#nome").value;
const horario = document.querySelector("#horario").value;
const idade = document.querySelector("#idade").value;
const cidade = document.querySelector("#cidade").value;
const dia = document.querySelector("#data").value;

    fetch("http://localhost:3000/aulas/novo",{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "nome": nome,
            "horario": horario,
            "idade": idade,
            "cidade": cidade,
            "dia": dia
        })
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
}).then((aula) => {
    // dados é a lista de objetos que vem da API
    const div = document.querySelector("#root");
    aula.map((aula) => {
        // ...
    });
});