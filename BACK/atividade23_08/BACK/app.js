import express from 'express'
import cors from 'cors'
import { Produtos } from "./Produtos.js"
// Cria uma instância do aplicativo Express
const app = express();

// Configura os processadores para lidar com as solicitações e respostas:

app.use(express.json())     // Diz ao servidor para entender informações em formato JSON

app.use(cors())     // Diz ao servidor para permitir que diferentes sites acessem este servidor

app.use(express.urlencoded({extended : true}))  // Diz ao servidor para entender informações de formulário

// Define uma regra: se alguém acessar a raiz ("/") do nosso site usando um navegador, faça o seguinte:

app.post("/novo",(req,res)=>{
    const { id,descricao,preco } = req.body;
    const produto = new Produtos(id,descricao,preco);
    return res.status(200).json(produto)
})


app.listen(4000,()=>{console.log("Running!")})  // Inicia o servidor na porta 4000