# Daily Schedule 

## Caso De Uso - Cronograma 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 11/06/2022 | 1.0 | Versão Inicial | Equipe Daily Schedule |
| 22/10/2022 | 1.1 | Versão continuada | Equipe Daily Schedule |
| 20/01/2023 | 1.2 | Versão continuada | Equipe Daily Schedule |
| 22/01/2023 | 1.3 | Versão Final | Equipe Daily Schedule |

### 1. Resumo
Este caso de uso descreve as possíveis atividades realizadas pelo ator estudante na entidade cronograma, ou seja, permite incluir um novo cronograma, alterar um cronograma pré-existente, consultar um ou mais cronogramas que foram criados, e remover um dos cronogramas pertencentes ao ator.

### 2. Atores
Estudante.

### 3. Pré-condições
Fazer login.

### 4. Pós-condições
Um cronograma é inserido no sistema, possibilitando ao ator editá-lo, remove-lo, compartilha-lo, exibi-lo e exporta-lo.

### 5. Fluxo de Eventos<br>
#### &nbsp;&nbsp;&nbsp;5.1. Fluxo Principal
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Clica em criar cronograma | 2. Exibe os campos de infomações do cronograma com a privacidade do cronograma, e o título para serem preenchidos.|
| 3. Após preencher a privacidade e o título do cronograma, clicará em prosseguir. | 4. Exibirá os tipos de tarefas que podem ser adicionados a um cronograma. |
| 5. Selecionará um tipo de tarefa que deseja criar para o cronograma. | 6. Exibirá os campos de horário de inicio, horário de finalização, título, data, e outros que variam de acordo com cada tipo de tarefa. |
| 7. Preenche os campos de acordo com o tipo de tarefa escolhida e clica em prosseguir. | 8. Mostra o cronograma e as opções que podem ser realizadas com uma tarefa descrito no [CDU Tarefas](https://github.com/tads-cnat/dailyschedule/blob/doc-api/docs/cdu/Tarefa.md). |
| 9. Seleciona a opção finalizar cronograma. | 10. Exibe uma confirmação da criação do cronograma, exibe o cronograma, e exibe uma opção de exportar o cronograma ou compartilha-lo. |

#### &nbsp; 5.2. Fluxo Alternativo
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 9.1. Seleciona a opção de inserir outra tarefa. | 10.1. retorna ao passo 4 do fluxo principal, exibindo os tipos de tarefas que podem ser adicionados a um cronograma. |
| 11.1. Selecionará um tipo de tarefa que deseja criar para o cronograma. | 12.1. Exibirá os campos de horário de inicio, horário de finalização, título, data, e outros que variam de acordo com cada tipo de tarefa. |
| 13.1. Preenche os campos de acordo com o tipo de tarefa escolhida e clica em prosseguir. | 14.1. Mostra o cronograma e as opções que podem ser realizadas com uma tarefa descrito no [CDU Tarefas](https://github.com/tads-cnat/dailyschedule/blob/doc-api/docs/cdu/Tarefa.md).|
| 15.1. Seleciona a opção finalizar cronograma ou inserir outra tarefa, repetindo todo o fluxo alternativo. | 16.1. Exibe uma confirmação da criação do cronograma, exibe o cronograma, e exibe uma opção de exportar o cronograma ou compartilha-lo. |

### 6. Restrições e Validações
| Restrições | Validações |
| :-----: | :-----: |
| Nenhuma | Nenhuma |