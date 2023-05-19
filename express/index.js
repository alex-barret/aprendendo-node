const express = require("express") //importando
const app = express();//iniciando o express

app.get("/", function (req, res) {
    res.send("<h1>Bem vindo ao guia do programador</h1>")
})

app.get("/blog", function (req, res) {
    res.send("Bem vindo ao meu blog")
})

app.get("/canal/youtube", function (req, res) {
    res.send("Bem vindo ao meu canal")
})

app.get("/ola/:nome", function (req, res) {
    //REQ => Dados enviados pelo usuario
    //RES => Resposta que vai ser enviada para o usuario
    var nome = req.params.nome;
    res.send("<h1>oi " + nome + " </h1>")
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro")
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})

