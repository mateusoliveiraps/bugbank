# Histórias de usuário

Para criação das Users Stories foi feita uma análise das funcionalidades da aplicação BugBank e que foram encontrados a partir de testes de exploração.

## História do Usuário 1: Cadastro de Usuário

Como novo usuário do bugbank, gostaria de registrar meu usuário na plataforma, para então ter o controle todas as minhas transferências.

## Problema

Usuário do bugbank, não tem acesso a uma plataforma web para controlar suas finanças. Por isso o mesmo utiliza de anotações para saber suas transferências realizadas.

## O que precisamos fazer

Permitir criar um usuário em uma plataforma web.

### Critérios de aceite

1. O usuário deve ser capaz de acessar uma plataforma de banco digital.
2. O usuário deve poder inserir informações pessoais como email, nome, senha e se deseja inserir saldo inicial em sua conta.
3. O sistema deve garantir que as informações necessárias foram informadas.

## História do Usuário 2: Realizar Transferência

Como usuário do bugbank, gostaria de registrar transferência entre contas na plataforma, para então ter o controle todas as minhas transferências.

## Problema

Usuário do bugbank, não tem acesso a uma plataforma web para controlar suas transferências. Por isso o mesmo utiliza de anotações para saber suas transferências realizadas.

## O que precisamos fazer

Permitir realizar transferências bancárias em uma plataforma web.

## Critérios de aceite

1. O usuário deve ser capaz de realizar transferências bancárias.
2. O usuário deve poder inserir dados como conta bancária (com digito), valor da transferência e uma descrição.
3. O sistema deve garantir que as informações necessárias foram informadas.

## Casos de teste

Utilizei para a criação de casos de testes, uma aplicação que simula o dia a dia de uma equipe de desenvolvimento, onde foram feitos os casos com a escrita no modelo clássico e com todos os requisitos para cada execução.

Qase.io = https://app.qase.io/

usuário: mateus.oliveira@unoesc.edu.br
senha: Mateusadal1997*

Acessar a página e clicar no projeto BugBank, assim já vai direcionar para os casos de testes criados.
### Dicas
Ao clicar em qualquer caso de teste, pode validar o passo a passo criado e todas as identificações deste caso de teste.
Ao acessar a página Tests Runs, irá encontrar os testes executados.

## Tempo de teste

| Casos de Testes | Estimativa de horas | Reteste |
| --- | --- | --- |
| CT01 - Verifica se o usuário consegue se cadastrar na plataforma   | 3h | 1h |
| CT02 - Cadastrar um usuário sem informar nenhum campo | 1h | 1h |
| CT03 - Realizar uma transferência para uma conta existente | 8h | 2h |
| CT04 - Realizar uma transferência sem informar nenhum campo | 1h | 1h |
| Horas totais | 13h | 5h |

Horas do dia = 8h

Horas produtivas = 6h

Pessoas nos testes = 1

Projeto relativamente simples, apenas duas funcionalidades para automatizar. Foi passado 18 horas para finalizar o mesmo, com isso iremos dividir o tempo da seguinte forma.

18 horas / 1 pessoa / 6 horas produtivas = 3 dias e meio

Basicamente temos 1 semana para criar o plano de teste e iniciar a automação da aplicação.
