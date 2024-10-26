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

## Tempo de teste

Para calcular tempo dos testes utilizei a seguinte fórmulas:

- (ME) - Media de execução dos 4 casos de testes.
- (MP) - Media do tempo de preparação do ambiente.
- (MC) - Margem de contigencia de 10%
- (TT) - Tempo de teste TT = ME + MT + MC

Cálculos
```bash
# Foi utilizado os tempo de execução do pipeline

# Tempo de execução dos testes nos ultimos 3 pipelines
ME = (1,45m + 1,24m + 1,18m) / 3;
ME = 1,79m

# Tempo de execução de instalação das dependencias nos ultimos 3 pipelines
MP = (0,69m + 0,29m + 0,28m) / 3;
MP = 0,42m

# MC = (ME + MP) * 0,10
MC = (1,79m + 0,42m) ∗ 0,10 = 0,221 minutos

#TT = ME + MT + MC
TT = 1,79m + 0,42m + 0,221m

TT = 2 minutos e 43 segundos.
```
