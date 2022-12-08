# Documento de Visão 

### Histórico da Revisão

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 20/05/2022 | 1.0 | Versão inicial | Equipe Daily Schedule |
| 22/10/2022 | 1.1 | Versão continuada | Equipe Daily Schedule |

<br>

### 1. Objetivo do Projeto:
O projeto **Daily Schedule** tem como objetivo ajudar na organização dos estudos e rotinas de um estudante no seu dia a dia.

<br>

### 2. Descrição do problema:
| **O problema** | Está relacionado à desorganização dos estudantes nas demandas do dia a dia. |
| --- | --- |
| **afeta** | a vida dos estudantes do nível fundamental, médio e superior. |
| **cujo impacto é** | a perda de prazos e baixo rendimento escolar. |
| **uma boa solução seria** | o desenvolvimento de um sistema capaz de simplificar a organização das demandas acadêmicas. |

<br>

### 3. Descrição dos usuários:

| **Nome** | **Descrição** | **Responsabilidade** |
| --- | --- | --- |
| Estudante | Indivíduo com a necessidade de otimizar seu tempo de estudos. | Inserir seus horários e definir suas disciplinas. |
| Administrador | Administrador do sistema. | Pode fazer o desligamento de membros ou cancelamento de cronogramas indevidos. |
| Visitante | Usuário não cadastrado no sistema | Pode usar o site, fazer buscas e visualizar apenas cronogramas públicos, sem a opção de exportá-los. |

<br>

### 4. Descrição do ambiente dos usuários:
Visto que o sistema consiste em cronogramas personalizados para cada indivíduo interessado, então cabe ao próprio usuário personalizar seu ambiente. Os locais de interação são as abas para criar o cronograma de acordo com suas necessidades e demandas pessoais e de estudo.

<br>

### 5. Principais necessidades dos usuários:
Os estudantes sentem falta de um meio apropriado para controlar e organizar suas demandas acadêmicas e também observar sua produtividade. Para isso, os estudantes querem um sistema de simples manuseio que facilite esse processo. Assim, é interessante a criação de um sistema para a criação de cronogramas diários, semanais e mensais.

<br>

### 6. Alternativas concorrentes:
Como alternativas concorrentes há o Asana e o Trello, que permitem o gerenciamento de projetos com listas, quadros e calendários, além de cadastrar tarefas e listas de afazeres.

<br>

### 7. Visão geral do produto:
O Daily Schedule ajuda todos os estudantes que queiram organizar seus estudos e ter uma boa produtividade, com a criação de cronogramas diários, semanais e mensais. Sua interface tem uma boa usabilidade, sendo minimalista e intuitiva.

<br>

### 8. Requisitos FUNCIONAIS
| **Código** | **Nome** | **Descrição** |
| --- | --- | --- |
| RF01 | Criação de cronograma | O usuário pode criar cronogramas. |
| RF02 | Cadastro de tarefas| O usuário vai cadastrar os dias e horários em que terá uma tarefa do tipo aula, matéria, prova, afazer e horário vago. |
| RF03 | Visualização do cronograma | O usuário poderá visualizar um cronograma presente em sua coleção ou um cronograma público. |
| RF04 | Acesso aos meus cronogramas | O usuário poderá ver a listagem de seus cronogramas. |
| RF05 | Modificação do cronograma | O usuário pode editar e excluir cronogramas. |
| RF06 | Pesquisa de cronograma | O usuário pode usar uma aba de busca para pesquisar cronogramas públicos. |
| RF07 | Cadastro | Permite que pessoas visitantes da rede possam realizar seu cadastro no Daily Schedule. |
| RF08 | Autenticação | Com a efetuação do login os usuários têm acesso ao sistema. |
| RF09 | Configurações | O usuário poderá configurar opções como segurança e privacidade. |
| RF10 | Gerencia do perfil | Este requisito tem o propósito de habilitar o usuário estudante a consultar e atualizar seus dados de perfil. |
| RF11 | Lembretes importantes | O sistema vai lembrar o usuário no  cronograma diário sobre deveres importantes, como provas. |
| RF12 | Notificação por e-mail | O usuário terá a opção de receber lembretes das tarefas para ele mesmo por e-mail. |
| RF13 | Compartilhamento do cronograma | O usuário pode compartilhar seus cronogramas em outras aplicações. |
| RF14 | Exportação do cronograma | Os cronogramas criados podem ser exportados pelo usuário. |
| RF15 | Cancelamento de conta | Por questões de ordem éticas, um estudante pode ter seu perfil cancelado pelo administrador da rede. |
| RF16 | Exclusão de cronograma | Por questões de ordem éticas, um estudante pode ter seu cronograma excluído pelo administrador da rede. |
 

<br>

### 9. Requisitos NÃO-FUNCIONAIS
| **Código** | **Nome** | **Descrição** | **Categoria** | **Classificação** |
| --- | --- | --- | --- | --- |
| NF01 | Controle de acesso Usuário | Usuários não cadastrados só podem visualizar cronogramas públicos. | Segurança | Obrigatório |
| NF02 | Criptografia de dados | Dados como senha e email dos integrantes da rede devem ser gravados de forma criptografada no banco de dados. | Confidencialidade | Obrigatório |
| NF03 | Facilidade de uso | O sistema deve ter uma interface amigável que possibilite a seus usuários uma interação fácil. | Usabilidade | Desejável |
| NF04 | Troca de dados | O sistema deve usar uma biblioteca para manipular arquivos. | Manutenabilidade | Obrigatório |
| NF05 | Confiabilidade | Apresentar segurança, proteção e capacidade de manutenção no sistema. | Segurança | Obrigatório |
| NF06 | Tolerância à falhas | O sistema deve ter estratégias para tratar as falhas. | Usabilidade/Segurança | Obrigatório |

<br>

### 10. Regras de Negócio
| **Código** | **Nome** | **Descrição** |
| --- | --- | --- |
| RN01 | Benefícios aos assinantes | Os assinantes terão mais benefícios, como a possibilidade de aumentar a quantidade de cronogramas e acesso a paletas de cores exclusivas disponibilizadas pelo próprio sistema. |
| RN02 | Definir privacidade do cronograma | O usuário, durante ou após o desenvolvimento, poderá definir se seu cronograma será público ou privado. |
| RN03 | Controle de visitantes | O usuário visitante apenas poderá navegar pela plataforma visualizando cronogramas públicos. |
| RN04 | Dados da Tarefa | Os dados da Tarefa são: descrição, data e hora. |
| RN04 | Tipos de Tarefa especiais | Os tipos de tarefas especiais são aula e matéria. Essas tarefas possuem um dado a mais chamado assunto. |
