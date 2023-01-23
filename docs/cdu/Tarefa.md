# Daily Schedule 

## Caso De Uso - Tarefa

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 22/10/2022 | 1.0 | Versão Inicial | Christian |
| 22/01/2023 | 1.1 | Versão Final | Christian |

### 1. Resumo
Este caso de uso descreve as atividades realizadas pelo ator estudante na entidade tarefa, ou seja, permite incluir uma nova tarefa, alterar uma tarefa pré-existente, consultar uma ou mais tarefas que foram criadas, e remover uma ou mais tarefas pertencentes ao ator.

#### 1.1. Tipos De Tarefas e Seus Campos
|  |  |
| :-----: | :-----: |
|  |  |

### 2. Atores
Estudante.

### 3. Pré-condições
Fazer login.

### 4. Pós-condições
Uma tarefa é inserida no cronograma, possibilitando ao ator visualiza-la, editá-la, remove-la, e deleta-la.

### 5. Fluxo de Eventos<br>
#### &nbsp;&nbsp;&nbsp;5.1. Fluxo Principal
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Clica em criar tarefa. | 2. Exibe os tipos de tarefas existentes. |
| 3. Seleciona o tipo de tarefa desejado | 4. Exibe os campos pertinentes ao tipo de tarefa que foi selecionado. |
| 5. Preenche os campos da tarefa e clica em salvar tarefa. | 6. Exibe uma confirmação de criação da tarefa, exibe a tarefa que foi criada, exibe as opções de alterar tarefa e exlucir tarefa. |
| 7. Sai da tela ou altera/exclui uma tarefa. |  |

#### &nbsp; 5.2. Fluxos Alternativos

#### &nbsp; 5.2.1 Fluxo Alternativo - (Tópico 7)
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Seleciona a opção alterar tarefa | 2. Exibe os campos pertinentes ao tipo de tarefa já existente retomando ao passo 4. |
| 3. Altera os campos desejados e confirma | 4. Exibe uma confirmação de alteração da tarefa, exibe a tarefa que foi criada, e novamente a opção de alterar e excluir tarefa como no passo 6. |

#### &nbsp; 5.2.1 Fluxo Alternativo - (Tópico 7)
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Seleciona a opção apagar tarefa. | 2. Exibe uma confirmação perguntando se realmente deseja remover a tarefa. |
| 3. Confirma a exclusão da tarefa. | 4. Exibe uma confirmação de remoção da tarefa, remove a tarefa e retorna para a visualização do cronograma. |

### 6. Restrições e Validações
| Restrições | Validações |
| :-----: | :-----: |
| Não é permitido inserir o ID da tarefa, ele é gerido pelo sistema. | Quando omitido o parâmetro opicional de data, utilizar valores atuais (dia, mês e ano). |
| Não é permitido criar uma tarefa inserindo datas anteriores a atual. | Ao solicitar para visualizar uma tarefa, verificar se a mesma existe. |
| Não é permitido recuperar todas as tarefas de um usuário. | Verificar se está exibindo tarefas em uma data atual ou anterior |
| Não é permitido visualizar todas as tarefas do ano de um usuário. | Verificar se está atualizando uma tarefa existente. |
| Não é possível exibir uma tarefa em uma data posterior a atual. | Verificar se está excluindo uma tarefa existente. |
| Só é possível alterar uma tarefa tendo seu identificador. | Verificar se existe um determinado tipo de tarefa antes de excluir por tipo. |
| Apenas permitir remoção de tarefas que possuam um identificador, ou tipo, ou data, ou cronograma. |  |
