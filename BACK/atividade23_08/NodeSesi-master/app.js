import express from "express";
import cors from "cors";
import { Produto} from "./Produtos.js";

const app = express();


let listaProdutos = [
    new Produto(1 ,'havaina',100,2),
    new Produto(2,'camiseta',20,10),
    new Produto(3,'detergente',5,30),
    new Produto(4,'coca-cola',3.75,20)
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

app.get("/produtos",(req, res)=>{
    return res.status(200).json(listaProdutos)
})

app.post("/produtos/novo",(req,res)=>{
    const {desc, preco, qtd } = req.body;
    listaProdutos.push(new Produto(listaProdutos.length + 1, desc, preco, qtd));
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