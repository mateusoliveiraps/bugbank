# Projeto BugBank

## Descrição
Este projeto tem como objetivo automatizar os testes de uma aplicação web de um banco digital ( [bugbank](https://bugbank.netlify.app/) ). A aplicação permite aos usuários gerenciar suas transferências bancárias. Para garantir a qualidade e a funcionalidade, os testes automatizados foram implementados utilizando o Cypress, que é uma ferramenta moderna para testes de front-end, especialmente adequada para aplicativos web modernos.

## Dificuldades encontradas no desenvolvimento dos testes automatizados
Como esta aplicação foi feita com o intuito de gerar bugs para utilizar por testadores, foram encontrados alguns problemas no momento de automatizar, então vamos listar algumas alternativas que realizamos para poder desenvolver os testes automatizados.

### 1. Memória de armazenamento local
Está aplicação foi desenvolvida sem banco de dados, por isso utiliza de memória local do navegador, por isso todas as vezes que o Cypress executa um comando que atualiza a sua interface acaba que reseta a memória, sendo assim, impossível de reutilizar os usuários criados. Para resolver este problema e seguir nos testes, na parte de transferências temos um beforeEach com o cadastramento, armazenamento da conta, digito, login para limpar o buffer da aplicação, logout, cadastramento de um segundo usuário e login deste usuário. Por fim está foi a única forma que foi encontrada para poder pegar o número de conta do usuário 1, para poder realizar a transferência com o usuário 2.

### 2. Utilização do split
O split foi utilizado para separar a conta e o digito, pois nos campos de inserção estes são separados, mas ao criar a conta vem com conta-digito juntos. Por isso precisou criar uma lógica para separar estes dois.


## Funcionalidades
- Cadastro com adição de saldo e Login
- Transferência de saldo

## Instalação
Para configurar o ambiente e rodar os testes automatizados, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/mateusoliveiraps/bugbank.git
   ```

2. Acesse o diretório do projeto:
   ```bash
    cd bugbank
   ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Testes Automatizados
A documentação completa dos testes pode ser encontrada [aqui](./Documentation.md).

## Execução de Testes
Para rodar os testes automatizados, use o seguinte comando:
- Execução via CLI
```bash
npm run cy:run
```

- Execução via GUI ( Interface Grafica )

```bash
npm run cy:open
```
