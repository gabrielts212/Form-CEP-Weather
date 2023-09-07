Documentação do Projeto: Clima, CEP e Formulário
Página 1: Clima do Estado
Descrição:
A primeira página deste projeto exibe informações sobre o clima do estado em que o usuário está localizado.

Recursos:

Exibe o estado do usuário com base em sua localização.
Fornece informações atualizadas sobre o clima desse estado, incluindo temperatura, condições meteorológicas, umidade, etc.
Instruções de Uso:

Ao acessar a página, o sistema detectará automaticamente a localização do usuário (com permissão) ou permitirá ao usuário inserir manualmente o estado.
Os dados meteorológicos serão exibidos na página, atualizados em tempo real ou com base na pesquisa manual do estado.
Página 2: Busca de CEP
Descrição:
A segunda página deste projeto permite que os usuários pesquisem o CEP de uma rua com base no nome da rua.

Recursos:

Uma barra de pesquisa permite ao usuário inserir o nome da rua.
Após a pesquisa, a página exibirá o número do CEP e o nome da rua correspondentes.
Instruções de Uso:

Na página de busca de CEP, insira o nome da rua na barra de pesquisa.
Clique no botão "Pesquisar".
Os resultados da pesquisa, incluindo o número do CEP e o nome da rua, serão exibidos na página.
Página 3: Formulário de Envio de Dados
Descrição:
A terceira página deste projeto permite que os usuários preencham um formulário com informações pessoais e enviem os dados para o console.

Recursos:

Um formulário contendo campos para inserir o email, arquivos e nome.
Um botão "Enviar" para processar e exibir os dados no console.
Um botão "Limpar" para redefinir o formulário após o envio.
Instruções de Uso:

Na página de formulário, preencha os campos com as informações desejadas.
Clique no botão "Enviar" para enviar os dados.
Os dados inseridos serão exibidos no console do navegador.
Clique no botão "Limpar" para redefinir o formulário após o envio.
Tecnologias Utilizadas:
HTML, CSS e JavaScript para a criação e estilização das páginas.
APIs de clima para obter informações meteorológicas (por exemplo, OpenWeatherMap).
APIs de consulta de CEP para buscar informações de endereços (por exemplo, ViaCEP).
Manipulação do DOM para interação com o usuário e exibição de resultados.
Manipulação de eventos para processar formulários e ações do usuário.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Y
