# GERENCIAMENTO DE DADOS DO ELENCO API

A API de gerenciamento de dados é uma RESTfull API de controle de dados e estatistica. Ela fornece um ambiente onde os técnicos de um time podem alimentar os dados dos seus jogadores e obter de forma instantanea métricas sobre desempenho e eficiencia. Até o presente momento é possível alimentar o sistema com os dados de cadastro do jogador e resultados ofensivos até a presente data. Futuramente será incluido métricas de média e porcentagem de aproveitamento.

#

### :computer: COMO EXECUTAR
#### Requisitos:
- Editor de código-fonte (como VS Code)
- Node.JS
- Depurador de API's (como insomnia)
  
:arrow_right:Com o editor de codigo executando, no terminal, configure a pasta onde o projeto será clonado. 

:arrow_right:Copie o link deste repositório, execute um <b>`git pull`</b>.

:arrow_right:Feito isso, instale as seguintes dependencias:
- Express `(npm install express)`;
- Nodemon `(npm install -D nodemon)`;
  - A execução do codigo ficará por meio do comando <b>`npm run dev`</b>
  - Para isso é necessário ir no arquivo "PACKAGE.JSON" e editar a linha "scripts" para `"dev": "nodemon + caminho do seu arquivo index"`;
  !(https://imagizer.imageshack.com/img924/962/K1BF4k.jpg).

:globe_with_meridians: Lembrando que por padrão neste codigo o servidor de teste está configurada na porta 4000

#

## :checkered_flag: Endpoints para execução no depurador :checkered_flag:

### :hammer_and_wrench: Listar elenco
`GET /elenco`

Este endpoint irá apresentar na tela todos os jogadores cadastrados no elenco.

### :hammer_and_wrench: Cadastrar jogadores
`POST /cadastrar`

Esse endpoint irá fazer o cadastro de novos jogadores.
- **Requisição:** No _body_ deve conter um objeto com as seguintes propriedades:
    - Nome
    - Numero
    - Posição

### :hammer_and_wrench: Atualizar _stats_
`PUT /:numeroJogador/atualizar_stats`

Este endpoit irá permitir o cadastro dos _stats_ de cada jogador.
- **Requisiçao:**
- numeroJogador - Passado como parametro na rota
- No _body_ deve conter um objeto com as seguintes propriedades:
  - passesFeitos (atualizado de acordo com cada passe efetuado pelo jogador)
  - jardasPassadas (atualizado de acordo com a quantidade de jarda lançada pelo jogador)
  - passesRecebidos (de acordo com aquantidade de passes recebidos)
  - corridas (de acordo com a quantidade de corridas feitas)
  - jardasGanhas (de acordo com quantidade de jardas ganhas após um passe/corrida)
  - touchdowns (de acordo com a quantidade de pontuaçoes feita pelo jogador)

### :hammer_and_wrench: Excluir jogador
`DELETE /remover`
Este endpoint irá remover um jogador da lista de cadastro.
- No _body_ deve conter um objeto com as seguintes propriedades:
  - numero (numero do jogador a ser excluido)
  - tecnico (validação do tecnico responsável pela exclusão)
  - codigo (validaçao do codigo do tecnico responsavel pela exclusão)

 
### :warning: Atenção
#### Por ser uma API RESTful é necessário que tenha sempre a cada retorno um código de resposta. 

##### Exemplos: 

:white_check_mark: Uma requisiçao bem sucedida pode retornar um codigo da familia **2xx**.
`// res.status(200).json() -> OK`

:no_entry_sign: Uma requisição mal sucedida ou sem permissão pode retornar um codigo da familia **4xx**.
`// return res.status(404).json() -> NOT FOUND`



#

### :handshake: DESEJA AGREGAR AO PROJETO?
#### Guia de como entrar nesta iniciativa :raised_hands:
- :safety_pin: Inicie um _fork_ deste projeto;
- :herb: Crie uma _branch_ com suas ideias com o comando `git checkout -b "seu nome"`
- :envelope_with_arrow: A cada commit adicione uma mensagem com o propósito da idéia `git commit -m "incrementação de tal elemento"`;
- :bulb: Torne sua ideia disponível: `git push origin "nome do repositorio"`

