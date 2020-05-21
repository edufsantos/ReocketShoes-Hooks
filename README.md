<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">Rocketshoes - Frontend</h3>

<p align="center">Código do desafio do 7º módulo do Bootcamp GoStack 🎓</p>

## 💻 Projeto

RocketShoes é uma aplicação de compras online. A aplicação Web e a aplicação mobile podem ser usadas pelos usuários que querem efetuarem compras de maneira simples e fácil.

### <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width="30px" /> Redux
  
####  O que é Redux? 
  1. Biblioteca que implementa Arquitetura Flux; 
  2. Controle de estados globais; 
  3. Quando utilizar o Redux?;
  4. Meu estado tem mais de um “dono”;
  5. Meu estado é manipulado por mais componentes;
  6. As ações do usuário causam efeitos colaterais nos dados
  7.Exemplos: Carrinho de compras, dados do usuário, player de música, etc

#### Princípios 
1.Toda action deve possuir um “type”; 
2. O estado do Redux é o único ponto de verdade; 
3. Não podemos mutar o estado do Redux sem uma action; 
4. As actions e reducers são funções puras, ou seja, não lidam com side-effects assíncronos; 
5. Qualquer lógica síncrona para regras de negócio deve ﬁcar no reducer e nunca na action; 
6. Nem toda aplicação precisa Redux, inicie sem ele e sinta a necessidade depois;

#### A store
"store" é o nome dado pelo Facebook para o conjunto de estados da sua aplicação. Vamos pensar na store como um grande centro de informações, que possui disponibilidade para receber e entregar exatamente o que o seu componente requisita (seja uma função, ou uma informação propriamente dita). Tecnicamente, a store é um objeto JavaScript que possui todos os estados dos seus componentes.

#### Os reducers
Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer, chamado "userReducer". Um reducer é encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store.


#### As actions
Actions são responsáveis por requisitar algo para um reducer. Elas devem ser sempre funções puras, o que, dizendo de uma forma leiga, quer dizer que elas devem APENAS enviar os dados ao reducer, nada além disso.

##### Exemplo

```

//reducer inicial

[]

// Action Add to cart
{   
  type: "ADD_TO_CART",   
    product: {     
      id: 1,     
      title: "Novo produto",     
      price: 129.9   
    } 
 }

//reducer após

  
[   
  {     
    id: 1,     
    title: "Novo produto",     
    price: 129.9,     
    amount: 1,     
    priceFormatted: "R$129,90"   
  }
]


//action update ammount

{   
  type: “UPDATE_AMOUNT”,   
  product: 1,   
  amount: 5, 
}

//reducer final

[   
  {    
    id: 1,     
    title: "Novo produto",     
    price: 129.9,     
    amount: 5,    
    priceFormatted: "R$129,90"   
  } 
]
 
```


## <img src="https://static.thenounproject.com/png/9280-200.png" width="30px"/> Libraries

### [JSON Server](https://www.npmjs.com/package/json-server)
  Essa biblioteca foi utilizada para cirar uma API REST fake, para simular consultas e assim utilizar as funcionalidades do redux.
  
### [IMMER](https://github.com/immerjs/immer)
  Essa lib ajuda a lidar com objetos e arrays imutaveis do react;
  <p>A ideia básica é que você aplique todas as suas alterações a um draftState temporário , que é um proxy do currentState . Quando todas as suas mutações estiverem concluídas, o Immer produzirá o nextState com base nas mutações no estado de rascunho. Isso significa que você pode interagir com seus dados simplesmente modificando-os, mantendo todos os benefícios de dados imutáveis.</p>
  <img src="https://immerjs.github.io/immer/img/immer.png" />.
  
### [Reactotron](https://github.com/infinitered/reactotron) 
  além de ser uma libtambém é um software de monitoramento e debug da aplicação em desenvolvimento
 
 Use it to:

  - view your application state
  - show API requests & responses
  - perform quick performance benchmarks
  - subscribe to parts of your application state
  - display messages similar to `console.log`
  - track global errors with source-mapped stack traces including saga stack traces!
  - dispatch actions like a government-run mind control experiment
  - hot swap your app's state using Redux or mobx-state-tree
  - track your sagas
  - show image overlay in React Native
  - track your Async Storage in React Native

You plug it into your app as a dev dependency so it adds nothing to your product builds.

### [Redux-Saga](https://redux-saga.js.org/)
  <img src="https://redux-saga.js.org/logo/0800/Redux-Saga-Logo-Landscape.png" />
  É uma biblioteca que visa tornar os efeitos colaterais do aplicativo (ou seja, coisas assíncronas, como busca de dados e coisas impuras, como acessar o cache do navegador) mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores no tratamento de falhas, assim criando um passo a mais no proceso do redux entre a action e o reducer.
  
### Toastify
  O React-Toastify permite adicionar notificações ao seu aplicativo com facilidade. Chega de bobagens!
  ![demonstração](https://user-images.githubusercontent.com/5574267/35336500-e58f35b6-0118-11e8-800b-2da6594fc700.gif)

##  🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd RocketShoes-Redux`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn start` para iniciar a aplicação;
5. Rode `json-server server.json -p 3333`.
