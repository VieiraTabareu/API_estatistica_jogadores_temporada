const express = require("express")
const { listarElenco, cadastrarJogador, atualizarStats, excluir } = require("./controladores")
const rotas = express()

rotas.post("/cadastrar", cadastrarJogador)
rotas.get("/elenco", listarElenco)
rotas.put("/:numeroJogador/atualizar_stats", atualizarStats)
rotas.delete("/remover", excluir)


module.exports = rotas