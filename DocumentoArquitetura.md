# Daily Schedule
### Documento de Arquitetura do Sistema

|  Data  | Versão | Descrição | Autores |
|:-------|:-------|:----------|:------|
| 20/01/2023 |  **`1.00`** | Versão Inicial  | Equipe Daily Schedule |

## 1. Introdução

O Daily Schedule é uma solução prática e intuitiva, desenvolvida para **_estudantes_**, que desejam organizar melhor a sua rotina de atividades acadêmicas e de tarefas cotidianas, permitindo assim, um maior aumento de produtividade e controle de suas tarefas e tempo, através da criação de cronogramas diárias, semanais e mensais.

## 2. Termos e Abreviações

**Conceitos:**


- **Cronograma**: Conjunto de tarefas criado pelo sistema, a partir das tarefas informadas pelo usuário.
- **Tarefa**: Entidades que compõem um cronograma, definidas pelo ID, data, título, descrição, assunto, horário, tipo e status.
- **Aula**: Tarefa destinada aos horários de aula.
- **Matéria**: Tarefa destinada a um assunto específico.
- **Prova**: Atividade avaliativa relativa a alguma disciplina.
- **Afazer**: Tarefa genérica, podendo ser qualquer atividade do cotidiano, não necessariamente, relacionada a estudos.
- **Horário vago**: Horário livre, sem quaisquer compromissos ou atividades. 
- **Privacidade**: Visualização do cronograma, podendo ser pública (todos têm acesso) ou privada (somente o autor tem acesso).
- **Lembrete**: Notificação para lembrar de alguma tarefa cadastrada pelo estudante. 

**Tipos de usuário:**

- **Administrador**: Ator com permissões de moderador no sistema, podendo controlar os cronogramas e as contas cadastradas.
- **Estudante**: Indivíduo cadastrado no sistema e que deseja criar um cronograma de atividades, para melhor otimização de tempo.
- **Visitante**: Usuário ainda não cadastrado no sistema, com permissões limitadas e que pode visualizar os cronogramas públicos existentes. 


## 3. Descrição de Requisitos
### 3.1.Requisitos Funcionais
| Cod. | Nome | Descrição |
| :---: | :---: | :--- |
| RF001 | Criação de Cronograma | O usuário do tipo Estudante pode criar cronogramas. |
| RF002 | Cadastro de Tarefas | O usuário do tipo Estudante irá cadastrar os dias e horários em que terá uma tarefa do tipo aula, matéria, prova, afazer e horário vago. |
| RF003 | Visualização do Cronograma | O usuário poderá visualizar um cronograma presente em sua coleção ou um cronograma público. |
| RF004 | Acesso aos Meus Cronogramas | O usuário do tipo Estudante poderá ver a listagem de seus cronogramas. |
| RF005 | Modificação de Cronograma | O usuário do tipo Estudante pode editar e excluir os seus cronogramas. |
| RF006 | Pesquisa de Cronograma | O usuário pode usar uma aba de busca para pesquisar cronogramas públicos. |
| RF007 | Cadastro de Usuário | Permite que os visitantes possam realizar seu cadastro na plataforma Daily Schedule. |
| RF008 | Autenticação | Com a efetuação do login os usuários têm acesso ao conteúdo do sistema. |
| RF009 | Configurações de Cronograma | O usuário poderá configurar opções de privacidade e tornar o cronograma com visualização privada ou pública. |
| RF010 | Gerência do Perfil | Permite ao usuário do tipo Estudante consultar e atualizar os seus dados de perfil. |
| RF011 | Lembretes Importantes | O sistema lembrará ao usuário no cronograma diário sobre deveres importantes, como provas, por exemplo. |
| RF012 | Notificação por E-mail | O usuário terá a opção de receber lembretes das tarefas cadastradas no sistema, por e-mail. |
| RF013 | Compartilhamento do Cronograma | O usuário pode compartilhar seus cronogramas em outras aplicações. |
| RF014 | Exportação do Cronograma | Os cronogramas de atividades criados podem ser exportados pelo usuário do tipo Estudante. |
| RF015 | Cancelamento de Conta | Por questões de ordem éticas, um estudante pode ter seu perfil cancelado pelo administrador da rede. |
| RF016 | Exclusão de Cronograma | Por questões de ordem éticas, um estudante pode ter seu cronograma excluído pelo administrador da rede. |



### 3.2.Atributos de Qualidade
| ID | Atributo de qualidade | Motivação |
| :--- | :--- | :--- |
| 1 | Estudante só pode editar, modificar ou excluir os seus próprios cronogramas | Segurança |
| 2 | Autenticação de usuários para realizar login no sistema | Segurança e Desempenho |
| 3 | Estudante só pode gerenciar o seu próprio perfil | Segurança |
| 4 | Estudante só é capaz de realizar listagem dos seus cronogramas | Segurança |


### 3.3.Stakeholders
| Papel | Interesse |
| :--- | :--- |
| Estudante | Possui interesse em uma plataforma onde ele possa obter de maneira simples, um cronograma, ao informar suas atividades cotidianas, seus afazeres e demandas acadêmicas, para melhor organização de seu tempo e aumento de produtividade. |
| Desenvolvedor | Tem interesse em desenvolver uma plataforma intuitiva e prática, que possa atender aos objetivos do cliente, seguindo boas práticas de desenvolvimento. |

## 4. Restrições Arquiteturais
### 4.1.Restrições técnicas
|  | Restrição | Contexto e/ou Motivação |
| :--- | :--- | :--- |
| Restrição de software e programação |
| RT1 | Acessibilidade | A aplicação foi desenvolvida sem adequar-se ou atentar-se às limitações de usuários portadores de necessidades especiais. |
| Restrição de sistema operacional |
| RT3 |  |  |
| Restrições de Hardware |
| RT5 |  |  |

## 5.	Escopo do Sistema e Contexto
### 5.1.	Diagrama de Casos de Uso
| CDU | Objetivo | Ator Primário | Implementado |
| :--- | :--- | :--- | :--- |
| CDU01 | O usuário pode cadastrar suas tarefas. | Estudante | Sim |
| CDU02 | O usuário pode criar um cronograma, após informar suas tarefas. | Estudante | Sim |
| CDU03 | O usuário pode visualizar um cronograma público. | Estudante e Visitante | Sim |
| CDU04 | O usuário pode editar seu próprio cronograma. | Estudante | Sim |
| CDU05 | O usuário pode excluir seu próprio cronograma. | Estudante | Sim |
| CDU06 | O usuário pode editar seu próprio perfil. | Estudante | Não |
| CDU07 | O usuário pode excluir seu próprio perfil. | Estudante | Não |
| CDU08 | O usuário pode pesquisar um cronograma público. | Estudante e Visitante | Sim |

## 6.	Diagramas Conceituais
### 6.1.	Visão Lógica

#### Modelos de domínio
![Diagrama Classe de Domínio](https://user-images.githubusercontent.com/96999239/185751281-22d487e1-d0dc-4c7e-a249-19a8428ba6a0.svg)
| Conceito | Descrição |
| :--- | :--- |
| Estudante | Mantém informações de um usuário cadastrado (estudante). |
| Tarefa | Armazena informações de tarefas de um cronograma. |
| Tipo | Corresponde ao tipo de uma tarefa cadastrada por um estudante. |
| Cronograma | Mantém informações de um cronograma vinculado a um usuário do tipo Estudante. |

#### Modelo comportamental
Diagrama de Sequência: Criar Cronograma

![Diagrama de Sequência: Criar Cronograma](https://raw.githubusercontent.com/tads-cnat/dailyschedule/9b3f441201296edf9ebb2a3edd537e401b32ce36/docs/DS-%20CDU%20Cria%20Cronograma.svg?token=AZISUURQGOHEX5H4LY7V4BDDZWFMS)

Diagrama de Sequência: Visualizar Cronograma

![Diagrama de Sequência: Visualizar Cronograma](https://raw.githubusercontent.com/tads-cnat/dailyschedule/9b3f441201296edf9ebb2a3edd537e401b32ce36/docs/DS-CDU%20Visualizar%20Cronograma.svg?token=AZISUUX3OBCVAK2PD7IRRODDZWFMS)


## 7. Detalhamento da Implementação e Ambiente Físico

### 7.1.	Visão de Implementação
| Componente | Responsabilidades |
| :--- | :--- |
|  |  |

### 7.2.	Visão de Distribuição
| Nó | Descrição |
| :--- | :--- |
| SGBD - Sqlite3 | Sistema responsável pelo gerenciamento de banco de dados da aplicação |
| Servidor da aplicação - Frontend | Conjunto de interfaces e páginas da aplicação |
| Servidor da aplicação - Backend | Conjunto de classes, regras de negócio e endpoints |
| Máquina do usuário | Máquina onde o usuário acessará a aplicação |


### 7.3. Persistência
![Modelo Relacional](https://user-images.githubusercontent.com/96999239/185751208-54afc614-6205-4bc0-b9b1-ee41b28f7ea1.png)
| Classe | Tabela | Significado |
| :--- | :--- | :--- |
Estudante | estudante | Usuário que pode criar cronogramas
Cronograma | cronograma | Cronograma de tarefas criado por um estudante
Tarefa | tarefa | Tarefas de um cronograma
Tipo | tipo | Tipo de tarefa, podendo ser: aula, matéria, prova, afazer e horário vago

O SGBD utilizado foi o Sqlite3 com gatilhos, já que a função de retorno do banco de dados irá executar automaticamente quando um evento especificado do banco de dados ocorrer. Exemplo: ao se excluir um usuário, os cronogramas relacionados a ele, serão também excluidos.

### 7.4. Interface de Usuário
O protótipo da interface de usuário foi realizado utilizando a ferramenta Figma e sua implementação deu-se utilizando HyperText Markup Language (HTML), Cascading Style Sheets (CSS), JavaScript e React de framework. As escolhas de implementação justificam-se por maior domínio de tais tecnologias pela equipe de desenvolvimento.


## 8. Anexos

### 8.1. API do Projeto



### 8.2. API Externa
| URL | Descrição | Método HTTP | Tipo Retorno |
| :--- | :--- | :--- | :--- |

