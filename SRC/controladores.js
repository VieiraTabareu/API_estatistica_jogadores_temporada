const { jogadores } = require("../SRC/bancodedados/jogadores")

const listarElenco = (req, res) => {
    res.status(201).json(jogadores)
}

const cadastrarJogador = (req, res) => {
    const { nome, numero, posicao } = req.body

    if (!nome) {
        return res.status(400).json("Informe o nome")
    }
    if (!numero) {
        return res.status(400).json("Informe o número")
    }
    if (!posicao) {
        return res.status(400).json("Informe a posição")
    }

    const repetido = jogadores.find((jogador) => jogador.numero === numero)
    if (repetido) {
        return res.status(400).json("Número já cadastrado")
    }

    const jogador = { nome, numero, posicao }

    jogadores.push(jogador)
    res.status(201).json()
}

const atualizarStats = (req, res) => {
    const { numeroJogador } = req.params
    const { passesfeitos, jardaspassadas, passesRecebidos, corridas, jardasGanhas, touchdowns } = req.body
    const jogadorOrigem = jogadores.find((jogador) => jogador.numero === numeroJogador)
    const posicaoNoArray = jogadores.findIndex((jogador) => jogador.numero === numeroJogador)

    if (isNaN(numeroJogador)) {
        return res.status(400).json("Numero inválido")
    }
    if (!jogadorOrigem) {
        return res.status(404).json("Jogador nao encontrado")
    }

    stats = { passesfeitos, jardaspassadas, passesRecebidos, corridas, jardasGanhas, touchdowns }
    jogadores[posicaoNoArray].stats = stats

    return res.status(201).json()
}

const excluir = (req, res) => {
    const { numero, tecnico, codigo } = req.body
    const headCoach = "Vieira", offensiveCoach = "Bruno", codigoHC = "24", codigoOC = "16"
    const jogadorOrigem = jogadores.filter((jogador) => jogador.numero === numero)
    const posicaoNoArray = jogadores.findIndex((jogador) => jogador.numero === numero)

    console.log(tecnico)
    if (!numero){
        res.status(400).json("Informe o numero do jogador")
    }
    if (!jogadorOrigem){
        res.status(404).json("Jogador não encontrado")
    }
    if (!tecnico){
        res.status(400).json("Informe o nome do técnico")
    }
    if (tecnico != headCoach && tecnico != offensiveCoach){
        res.status(401).json("Tecnico não autorizado")
    }
    if (!codigo){
        res.status(403).json("Informe o código")
    }
    if (codigo != codigoHC && codigo != codigoOC){
        res.status(401).json("Codigo incorreto")
    }

    jogadores.splice(posicaoNoArray, 1)

    res.status(204).json()
}


module.exports = { cadastrarJogador, listarElenco, atualizarStats, excluir }