# Daily Schedule 

## Descrição da API - CDU Cronogramas 

### Histórico da Revisão

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 16/01/2023 | 1.2 | Versão Continuada | Christian |

### 1. Resumo
Esse documento visa descrever como funcionará a API do caso de uso principal do sistema.
<br>

### 2. Funcionamento
  - No endpoint dentro do diretório do projeto teremos um recurso chamado cronogramas.
  - O recurso cronogramas terá obrigatorioamente que receber um parâmetro.
  - Este recurso (cronogramas) terá 4 métodos, que são os mais comuns (POST, GET, PUT ou PATCH, e DELETE).
  - Os cronogramas criados pelos usuários são semanais, tendo como base o dia/semana atual. 
  - O conteúdo dos cronogramas são tarefas. As tarefas são classificadas em mais de um tipo, e estão descritas no CDU Tarefas.

### 3. Exemplificação dos Parâmetros e do Endpoint
- O recurso cronogramas terá 5 parâmetros, sendo 1 passado como obrigatório, 3 parâmetros padrões que podem ser omitidos, e 1 opcional.
- Quando os parâmetros padrões forem omitidos, o sistema irá passar as referências atuais. Ex: Semana atual, Mês Atual, Ano Atual e Último ID Cadastrado.

#### 3.1 - Parâmetros
- O primeiro parâmetro é passado como obrigatório, e indicará a qual usuário aquele cronograma pertence.
- O segundo parâmetro pode ser passado ou omitido, ele informa a qual semana o cronograma pertence.
- O terceiro parâmetro pode ser passado ou omitido, ele informa o mês ao qual as semana do cronograma pertencem.
- O quarto parâmetro pode ser passado ou omitido, ele informa o ano ao qual os meses com as semanas pertencem.
- O quinto parâmetro é passado como opcional, ele irá indicar um dos vários cronogramas cadastrados em uma semana.

#### 3.2 - Endpoint
- ***Padrão Utilizado***
  - recurso/parametro-1/parametro-2/paramatro-3/parametro-4/parametro-5
  - cronogramas/usuário/semana/mes/ano/id

### 4. Exemplos dos Métodos e do Endpoint
  - ***POST***
    - **cronogramas/** 
      - Não funcionará, pois o primeiro parâmetro que informa o usuário é obrigatório e deve ser passado.
    - **cronogramas/1**
      - Criará o cronograma para o usuario 1 omitindo os outros parâmetros, para os parâmetros omitidos, o sistema pegará a semana, mês e ano atuais, assim como irá incrementar o ID do cronograma.
    - **cronogramas/1/semana3**
      - Criará o cronograma para o usuario 1 dentro da semana 3 omitindo os outros parâmetros, para os parâmetros omitidos, o sistema pegará o mês e ano atuais, assim como irá incrementar o ID do cronograma.
    - **cronogramas/1/semana3/mes2** 
      - Criará o cronograma para o usuario 1 dentro da semana 3 que pertence ao mês 2, omitindo os outros parâmetros. Para os parâmetros omitidos, o sistema pegará o ano atual assim como irá incrementar o ID do cronograma.
    - **cronogramas/1/semana3/mes2/2023** 
      - Criará o cronograma para o usuario 1 dentro da semana 3 que pertence ao mês 2 referente ao ano de 2023. O sistema irá incrementar o ID do cronograma.
    - **cronogramas/1/semana3/mes2/2023/5** 
      - Irá gerar um erro, pois o último parâmetro referente ao ID do cronograma é criado e incrementado/decrementado pelo sistema.
    - **OBS: Caso esteja em uma semana/mes/ano e tente criar um cronograma para a semana/mes/ano anterior, não permitir.**
<br>

  - ***GET***
     - cronogramas/ (inválido por não informar a quem pertence o cronograma)
     - cronogramas/1 (Retorna todos os cronogramas da semana atual do usuario 1)
     - cronogramas/1/2 (inválido pois o segundo parametro é uma semana definida de 1 a 4)
     - cronogramas/1/semana3 (Retorna todos os cronogramas do usuario 1 da semana 3)
     - cronogramas/0 (Retorna um erro pois não informa o usuario nem o cronograma)
     
  - ***PUT ou PATCH***
     - cronogramas/1 (Atualizará o cronograma atual do usuario 1)
     - cronogramas/1/3 (Atualizará o cronograma do usuario 1 da semana 3)
     - cronogramas/0 (Retorna um erro pois não informa o usuario nem o cronograma)
     - cronogramas/0/3 (Retorna um erro pois pede o cronograma da semana 3 mas não informa qual o usuario)
        
  - ***DELETE***
     - cronogramas/1 (Apagará o cronograma atual do usuario 1)
     - cronogramas/1/3 (Apagará o cronograma do usuario 1 da semana 3)
     - cronogramas/0 (Retorna um erro pois não informa o usuario nem o cronograma)
     - cronogramas/0/3 (Retorna um erro pois pede o cronograma da semana 3 mas não informa qual o usuario)
<br>

**OBS: Alguns desses métodos devem verificar se o cronograma está público ou privado para não executar algumas das operações CRUD.**
<br><br>

<!--
Observações:
Adicionar Hyperlink para os cdu's que são citados, Cronogramas e Tarefas.
-->
