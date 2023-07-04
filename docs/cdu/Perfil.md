# Daily Schedule 

## Caso De Uso - Perfil 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 11/06/2022 | 1.0 | Versão Inicial | Equipe Daily Schedule |
| 22/10/2022 | 1.1 | Versão continuada | Equipe Daily Schedule |
| 22/01/2023 | 1.2 | Versão Final | Equipe Daily Schedule |

### 1. Resumo
Este caso de uso descreve as possíveis atividades realizadas pelo ator estudante na entidade perfil, ou seja, permite modificar/atualizar os dados de um perfil já existente, consultar perfis criados (para o administrador), e excluir o perfil referente ao ator.

### 2. Atores
Estudante e administrador.

### 3. Pré-condições
Fazer login.

### 4. Pós-condições
Um perfil é cadastrado no sistema, possibilitando ao ator do tipo Estudante editar ou remover esse perfil criado. E quanto ao administrador, removê-lo, mediante a alguma violação.

### 5. Fluxo de Eventos<br>
#### &nbsp;&nbsp;&nbsp;5.1. Fluxo Principal de Atualização de Perfil
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Clica em "meu perfil". | 2. Mostra as opções disponíveis. |
| 3. Seleciona a opção de alterar dados. | 4. Solicita as informações que o usuário desejar alterar.|
| 5. Preenchee os novos dados atualizados. | 6. Atualiza os dados informados. |
| 7. Confirma os dados preenchidos e clica em salvar. | 8. Salva os novos dados informados. |

#### &nbsp;&nbsp;&nbsp;5.1.1. Fluxo de Exceção de Atualização de Perfil <br>
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Seleciona opção de alteração de dados. | 2. Solicita novos dados. |
| 3. Preenche campos com formato inválido.  | 4. Solicita que o usuário preencha os campos com formato correto e não salva alterações.


#### &nbsp;&nbsp;&nbsp;5.2. Fluxo Principal de Exclusão de Perfil
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Clica em "meu perfil" | 2. Mostra as opções disponíveis. |
| 3. Seleciona a opção de exlusão de perfil. | 4. Exibe alerta de exclusão e pede confirmação do usuário. |
| 5. Confirma a ação. | 6. Realiza exclusão do perfil do usuário do banco de dados . |

#### &nbsp;&nbsp;&nbsp;5.2.1 Fluxo Alternativo de Exclusão de Perfil (administrador)
| Ações Do Ator | Ações Do Sistema |
| :----- | :----- |
| 1. Seleciona opção de visualizar perfis.  | 2. Mostra os perfis cadastrados. |
| 3. Seleciona o perfil que deseja excluir. | 4. Exibe a opção de exclusão. |
| 5. Confirma a ação. | 6. Realiza exclusão do perfil do usuário do banco de dados . |


