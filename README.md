<h1>Challange Opa!</h1>
<div style="display: flex; align-items: center;">
<img style='width:100px;' src='https://wiki.ixcsoft.com.br/logo/logo_ixc_opasuite_cor.png'>
<img style='width:100px; margin: 20px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png'>
<img style='width:100px; height: 40px;' src='https://ioco.tech/wp-content/uploads/2020/04/mongodb-logo.png'>

</div>
<h2>Propósito do projeto:</h2>
<p>Este foi um projeto elaborado com base em um desafio para a oportunidade de ingressar como desenvolvedor do Opa!</p>

<h3>Desafio</h3>
<p>Criar uma API para gerenciar categorias e produtos, possibilidade a criação e autenticação de usuários para utilizar o sistema, utiliazando autenticação via token para executar o gerencimento</p> 
<h3>Tecnologias</h3>
<ol> 
 <li>Node.js 20.18.0 </li> 
 <li>Mongodb v8.0.3 </li> 
</ol>
<h2>Critérios</h2>
<ol>
    <li>Criar usuários e realizar autenticação</li>
    <li>Criar, editar e listar produtos/categorias</li>
    <li>Buscar todos os produtos pertencentes a uma categoria</li>
    <li>Buscar todas as categorias e trazer os produtos vinculados</li>
</ol>

<h2>Instalação</h2>

<h3>Baixando e configurando o projeto:</h3>

<p>Baixe o nodejs: <a href="https://nodejs.org/en">Clique aqui</a></p>

<p>Baixe o projeto com Git clone ou ZIP</p>

`git clone https://github.com/WillianHora/challange_dev_opa.git`

<p>Instalando dependências</p>

`npm install`

<p>Crie um arquivo .env com as variáveis necessárias. Nesse projeto é obrigatório somente a variável secret que se diz respeito a geração do token</p>

`SECRET = 848fdyIU9R89UD**@!@$$Ho0HDJHAVdifjkkjlfopa0481y30`

<h3>Baixando o mongodb e conectando:</h3>

<p>Baixe o mongodb: <a href="https://www.mongodb.com/pt-br">Clique aqui</a></p>

<p>Instale o mongodb localmente, siga para o arquivo db_connection.js caso o banco esteja em outra computador da sua rede ou queira alterar o nome do banco</p>

`mongoose.connect('mongodb://127.0.0.1:27017/opa-dev')`

<p>Caso queira usar o Atlas, basta também só alterar a URL do campo de conexão, de preferencia criar as variaveis da URL e da senha que conecta ao banco e utilizar a dotenv para obter os dados</p>

<h3>Executando aplicação</h3>

`npm start`

<h3>Endpoints:</h3>
<h4>Rota para a criação de usuário</h4>

`/user`

<h4>Rota para autenticação</h4>

`/login`

<h4>Rotas para produtos</h4>
<p>Criar produto</p>

`/products/`

<p>Editar produto</p>

`/products/{id}`

<p>listar todos os produtos</p>

`/products/all`

<p>Listar apenas um produto</p>

`/products/one/{id}`


<h4>Rotas para categorias</h4>
<p>Criar produto</p>

`/categories/`

<p>Editar produto</p>

`/categories/{id}`

<p>listar todos os produtos</p>

`/categories/all`

<p>Listar apenas um produto</p>

`/products/one/{id}`


<p>Buscar os produtos por categoria</p>

`/catpro/{id}`




