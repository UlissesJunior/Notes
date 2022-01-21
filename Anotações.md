### O que é React?

- Biblioteca para criar interfaces de usuário
- Conceito de componentes

### Conceito de Componentes

- Um componente é uma função Javascript (JSX).
- Vantagens
    - Reusabilidade de código
    - Ótimo trabalho em equipe

<p align="center">
<img src="../src/img/rda_demo.png">
<p>

### Como criar um app react

- Primeiro é necessário a instalação do Node.js
- Abra o terminal do vs code e digite um desses termos

NPM

```jsx
npm init react-app my-app
```

NPX

```jsx
npx create-react-app my-app
```

YARN

```jsx
yarn create react-app my-app
```

### Como iniciar um app react

```jsx
cd my-app
npm start
```

### App.js

o app.js altera o index.html, ele é o principal arquivo, onde as modificações são feitas.

### Hello World

O primeiro contato das pessoas em uma nova linguagem geralmente é o Hello World.

No código a seguir, fizemos as seguintes coisas:

- Colocamos o import React from 'react' que é necessário para todo início de App
- Criamos uma função javascript (React Components) arrow, que nos retorna um Hello World com a tag H1
- Exportamos a função com o export default App

```jsx
import React from 'react'

const App = () => {
  return (
    <h1>Hello World</h1>
  )
}

export default App
```

### Retornar uma variável

Para retornar uma variável, existe uma maneira bem simples, que no caso é o do código a seguir:

```jsx
import React from 'react'

const App = () => {
const message = "Hello World";
return <h1>{message}</h1>
}

export default App
```

### Apagar arquivos

ReportWebVitals.js

SetupTest.js

App.css

App.test.js

Logo.svg

Apagar os comentários e imports de arquivos apagados

  

### Definir Classe

Para definir uma classe no React, temos uma pequena diferença do HTML5

```jsx
<div className="container">
```

### Return

O react não suporta a alteração de mais de um componente fora de uma div ou de um fragment (<>).

Modo Errado ❌

```jsx
return (
	<div> <div>
	<input>
)
```

Modo Certo ✅

```jsx
return (
	<>
		<div> <div>
		<input>
	</>
)
```

### State

É uma variável que quando atualizada, o componente é renderizado junto com a atualização da variável.

### Declarando um state

```jsx
const [message, setMessage] = useState(' ')
//     state   altera state   gera o state('argumento primário')
```

### Effect

Executa um bloco de código declarado na função assim que a variável declarada na função atualizar, vale lembrar que o Effect não foi feito para ter um return.

### Declarando um Effect (Arrow Function)

```jsx
useEffect{() => {
console.log(oi)}, 
[notes]);

//Notes é a variável declarada e toda vez que ela atualizar, será implantado um "oi" no console
```

### Atalhos usando a extensão **Simple React Snippets (Vs Code)**

Sfc = component

Imr = chama o react

### Como chamar uma imagem

```jsx
//Import no início
import buttonInfo from '../img/info.svg'

//Chamando a imagem
<img src={buttonInfo} />
```

### Biblioteca - React Router Dom

O react não tem páginas como no Html, sendo assim, tudo ocorre por uma dinamização usando a biblioteca “React Rouder Dom”.

### Instalação

Para a instalação, utilizamos o seguinte comando:

```jsx
npm install react-router-dom@5.2.0
```

### Biblioteca - uuid

A uuid é uma biblioteca que gera ids aleatórios automaticamente.

### Instalação

Para a instalação, utilizamos o seguinte comando:

```jsx
npm install uuid
```

### API - axios

A axios é uma API de notas, que gera estas notas automaticamente quando requisitada.

### Instalação

Para a instalação, utilizamos o seguinte comando:

```jsx
npm install axios
```

### Key

Sempre que você renderiza mais de um componente em um loop, é necessário usar uma key, para uma render mais rápida por parte do react.

## Repositório e Vídeo das Anotações
### Repositório
[Curso de React Para Completos Iniciantes](https://youtu.be/ErjWNvP6mko)
### Vídeo
[https://github.com/felipemotarocha/curso-react-dicasparadevs](https://github.com/felipemotarocha/curso-react-dicasparadevs)

## Repositório, Site e Anotações da Aula
### Repositório
[https://github.com/UlissesJunior/Notes](https://github.com/UlissesJunior/Notes)
### Site
[https://ulissesjunior.github.io/Notes/](https://ulissesjunior.github.io/Notes/)
### Anotações
[https://github.com/UlissesJunior/Notes/blob/main/public/Anotações.md](https://github.com/UlissesJunior/Notes/blob/main/public/Anotações.md)