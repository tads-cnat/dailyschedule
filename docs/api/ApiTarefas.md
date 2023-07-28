# Daily Schedule 

## Descrição da API - [CDU Tarefa](https://github.com/tads-cnat/dailyschedule/blob/doc-api/docs/cdu/Tarefa.md)

### Histórico da Revisão

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 19/12/2022 | 1.0 | Versão Inicial | Christian |
| 22/01/2023 | 1.1 | Versão Final | Christian |

### 1. Resumo
Esse documento visa descrever como funcionará a API do caso de uso tarefas.
<br>

### 2. Funcionamento
  - No endpoint dentro do diretório do projeto teremos um recurso chamado tarefas.
  - O recurso tarefas terá obrigatorioamente que receber 2 parâmetros, e 3 serão opcionais.
  - Este recurso terá 4 métodos, que são os mais comuns (POST, GET, PUT ou PATCH, e DELETE).

### 3. Exemplificação dos Parâmetros e do Endpoint
- O recurso tarefa terá 5 parâmetros, sendo 2 passadoa como obrigatórioa, 3 parâmetros opicionais que podem ser omitidos.
- Quando os parâmetros padrões forem omitidos, o sistema irá passar as referências atuais. Ex: Semana atual, Mês Atual, Ano Atual e Último ID Cadastrado.

#### 3.1 - Parâmetros
- O primeiro parâmetro indicará a qual usuário aquela tarefa pertence.
- O segundo parâmetro informa a qual cronograma pertence a tarefa.
- O terceiro parâmetro é opcional e indica uma data.
- O quarto parâmetro também é opcional e referencia o tipo de tarefa, descrito no [CDU Tarefa](https://github.com/tads-cnat/dailyschedule/blob/doc-api/docs/cdu/Tarefa.md).
- O quinto parâmetro é opcional e informa especificamente qual tarefa se deseja.

#### 3.2 - Endpoint
- ***Padrão Utilizado***
  - recurso/parametro-1/parametro-2/paramatro-3/parametro-4/parametro-5
  - tarefas/usuário/idcronograma/data/tipo/idtarefa

### 4. Exemplos dos Métodos e do Endpoint
  - ***POST***
    - **tarefas/**
      - Não funcionará, pois o primeiro parâmetro que informa o usuário é obrigatório e deve ser passado.
    - **tarefas/1**
      - Irá gerar um erro, pois não indica qual o cronograma do usuário 1 onde se criará a tarefa.
    - **tarefas/1/1**
      - Criará uma tarefa no cronograma de identificador 1 para o usuário 1, utilizando o dia, a semana, e o mês atual.
    - **tarefas/1/1/05-10-2015**
      - Criará uma tarefa no cronograma de identificador 1, para o usuário 1, no qual a data é passada como parâmetro.
    - **tarefas/1/1/05-10**
      - Criará uma tarefa no cronograma de identificador 1, para o usuário 1, no qual informa o dia e mês do cronograma, utilizará como base o ano atual.
    - **tarefas/1/1/05**
      - Criará uma tarefa no cronograma de identificador 1, para o usuário 1, no dia 5 com o mês e ano atuais.
    - **tarefas/1/1/05-10-2015/5**
      - Irá gerar um erro pois o identificador é gerido pelo sistema, não podendo criar um cronograma com id desejado.

  - ***GET***
    - **tarefas/**
      - Não funcionará, pois o primeiro parâmetro que informa o usuário é obrigatório e deve ser passado.
    - **tarefas/1**
      - Irá gerar um erro, pois não indica qual o cronograma do usuário 1 onde se exibirá as tarefas.
    - **tarefas/1/1**
      - Erro por não especificar uma data para o cronograma de identificador 1.
    - **tarefas/1/1/05-10-2015**
      - Exibirá todas as tarefas do usuário 1 cadastradas no cronograma 1, no qual foram cadastradas na data informada.
    - **tarefas/1/1/05-10-2015/5**
      - Exibirá a tarefa de identificador 5 do usuário 1 cadastradas no cronograma 1, no qual foi cadastrado na data informada.
    - **tarefas/1/1/05-10**
      - Exibirá todas as tarefas do usuário 1 cadastradas no cronograma 1, no qual foram cadastradas no dia 5 do mês de outubro do ano atual.
    - **tarefas/1/1/05**
      - Exibirá todas as tarefas do usuário 1 cadastradas no cronograma 1, no qual foram cadastradas no dia 5 do mês e ano atual.
    - **tarefas/1/1/semana1**
      - Exibirá todas as tarefas do usuário 1 cadastradas no cronograma 1, no qual foram cadastradas na semana1 do mês e ano atual.
    - **tarefas/1/1/janeiro**
      - Exibirá todas as tarefas do usuário 1 cadastradas no cronograma 1, no qual foram cadastradas no mês de janeiro.
    - **tarefas/1/1/2015**
      - Erro por não ser possível recuperar todas as tarefas do ano.
    - **tarefas/1/1/05/prova***
      - Exibirá todas as tarefas do tipo prova no cronograma de identificador 1, para o usuário 1, no dia 5 com o mês e ano atuais.
     
  - ***PUT ou PATCH***
    - **tarefas/**
      - Não funcionará, pois o primeiro parâmetro que informa o usuário é obrigatório e deve ser passado.
    - **tarefas/1**
      - Irá gerar um erro, pois não indica qual o cronograma do usuário 1 onde se atualizará a tarefa.
    - **tarefas/1/1**
      - Erro por não especificar uma data para o cronograma de identificador 1.
    - **tarefas/1/1/05-10-2015**
      - Erro por não especificar o identificador do cronograma que se deseja atualizar.
    - **tarefas/1/1/05-10-2015/prova**
      - Irá ocorrer um erro pois não é possível atualizar todas as tarefas do tipo prova de uma determinada data.
    - **tarefas/1/1/05-10-2015/prova/5**
      - Irá alterar a tarefa do tipo prova de identificador 5, no qual pertece ao usuário 1 do cronograma de id 1 com a data especificada.

  - ***DELETE***
    - **tarefas/**
      - Não funcionará, pois não se pode apagar todas as tarefas do sistema.
    - **tarefas/1**
      - Irá gerar um erro, pois não pode deletar todas as terafas de um usuário.
    - **tarefas/1/1**
      - Apagará todas as tarefas do cronograma de identificador 1 com a data atual.
    - **tarefas/1/1/05-10-2015**
      - Removerá todas as tarefas do dia especificado, no qual é refeente ao cronograma 1 do usuário 1.
    - **tarefas/1/1/05-10-2015/prova**
      - Deletará todas as tarefas do tipo prova, no qual pertece ao usuário 1 do cronograma de id 1 com a data especificada.
    - **tarefas/1/1/05-10-2015/prova/5**
      - Irá apagar a tarefa de identificador 5 do tipo prova, no qual pertece ao usuário 1 do cronograma de id 1 com a data especificada.
