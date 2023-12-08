const params = new URLSearchParams(window.location.search)

const id = params.get("id");
const desc = params.get("desc");
const preco = params.get("preco");
const qtd = params.get("qtd");

if(id != null && desc != null && preco != null && qtd != null){
    document.querySelector("button")
.addEventListener("click",()=>{
    
const desc = document.querySelector("#desc").value;
const preco = document.querySelector("#preco").value;
const qtd = document.querySelector("#qtd").value;


    fetch(`http://localhost:3000/produtos/alterar/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "desc":desc,
            "preco": preco,
            "qtd":qtd
        })
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
})


}else{

document.querySelector("button")
.addEventListener("click",()=>{
const desc = document.querySelector("#desc").value;
const preco = document.querySelector("#preco").value;
const qtd = document.querySelector("#qtd").value;


    fetch("http://localhost:3000/produtos/novo",{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "desc":desc,
            "preco": preco,
            "qtd":qtd
        })
    }).then((resposta)=>{
        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
})}