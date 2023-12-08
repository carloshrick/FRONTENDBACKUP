import express from "express";
import cors from "cors";
import { Cadastro} from "./Cadastro.js";

const app = express();


let listaAulas = [new Cadastro("carlos",16,20,"bebedouro",5)
    
]
//Essa função é responsável por analisar o corpo das solicitações HTTP 
//que têm um tipo de conteúdo (Content-Type) definido como application/json. 
//Ela pega os dados JSON enviados na solicitação e os converte em um objeto JS.
app.use(express.json());

//  Habilita o protocolo CORS para a troca front-back
//  npm i cors
app.use(cors());

//Forma comum de codificar dados enviados em solicitações HTTP.
//Usado quando os dados são enviados de um formulário HTML para uma API. 
//Nesse formato, os dados são codificados como pares chave-valor, semelhantes aos parâmetros em uma URL.
app.use(express.urlencoded({ extended : true }));

app.get("/aulas",(req, res)=>{
    return res.status(200).json(listaAulas)
})

app.post("/aulas/novo",(req,res)=>{
    const { nome, horario, idade, cidade,dia } = req.body;
    listaAulas.push(new Cadastro(nome, horario, idade, cidade, dia));
    return res.status(200).json("cadastrado com sucesso!");
})

app.put("/produtos/alterar/:id",(req,res)=>{
    const { id } = req.params;
    const { desc, preco, qtd } = req.body;
    let produto = listaProdutos.find(obj => obj.id == id)
    produto.desc = desc;
    produto.preco = preco;
    produto.qtd = qtd;
    return res.status(200).json("alterado com sucesso!");
})  


app.delete("/produtos/excluir/:id" , (req,res)=>{
    const { id } = req.params;
    listaProdutos = listaProdutos.filter(p => p.id != id);
    return res.status(200).json("Descadastrado!")
})


app.listen(3000,()=>{
    console.log("api no ar!");
});