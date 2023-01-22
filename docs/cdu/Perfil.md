# Daily Schedule 

## Caso De Uso - Perfil 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 11/06/2022 | 1.0 | Versão Inicial | Equipe Daily Schedule |
| 22/10/2022 | 1.1 | Versão continuada | Equipe Daily Schedule |
| 22/01/2023 | 1.2 | Versão continuada | Equipe Daily Schedule |

### 1. Resumo
Este caso de uso descreve as possíveis atividades realizadas pelo ator estudante na entidade perfil, ou seja, permite criar um novo perfil, modificar um perfil já existente, consultar perfis criados (para o administrador), e remover o perfil referente ao ator.

### 2. Atores
Estudante e administrador.

### 3. Pré-condições
Fazer login.

### 4. Pós-condições
Um perfil é cadastrado no sistema, possibilitando ao ator do tipo Estudante editá-lo ou remove-lo. E quanto ao administrador, removê-lo, mediante a alguma violação.

### 5. Fluxo de Eventos<br> <br>
#### &nbsp;&nbsp;&nbsp;5.1. Fluxo Principal
1) O ator clica em “Criar meu cronograma”;
2) O sistema mostra um questionário com título e privacidade do cronograma;
3) O ator preenche o questionário e seleciona “Gerar cronograma”;
4) O sistema mostra o cronograma pronto e o caso de uso é finalizado. <br> <br>

#### &nbsp; 5.2. Fluxo Alternativo
##### &nbsp;&nbsp;&nbsp;  Fluxo alternativo (1): Cadastro de aula
&nbsp;&nbsp;&nbsp; a) No passo 2, o ator seleciona o cadastro de uma tarefa "aula";  <br>
&nbsp;&nbsp;&nbsp; b) O sistema solicita o questionário com a descrição, dias, horários e se a tarefa deve se repetir; <br>
&nbsp;&nbsp;&nbsp; c) O ator preenche os dados e o caso de uso retorna para o passo 2.

##### &nbsp;&nbsp;&nbsp; Fluxo alternativo (2): Cadastro de matéria
&nbsp;&nbsp;&nbsp; a) No passo 2, o ator seleciona o cadastro de uma tarefa "matéria"; <br>
&nbsp;&nbsp;&nbsp; b) O sistema solicita o questionário com a assunto, descrição, dias, horários e se a tarefa deve se repetir; <br>
&nbsp;&nbsp;&nbsp; c) O ator preenche os dados e o caso de uso retorna para o passo 2.

##### &nbsp;&nbsp;&nbsp;  Fluxo alternativo (3): Cadastro de prova
&nbsp;&nbsp;&nbsp; a) No passo 2, o ator seleciona o cadastro de uma tarefa "prova"; <br>
&nbsp;&nbsp;&nbsp; b) O sistema solicita o questionário com a assunto, descrição, dias, horários e se a tarefa deve se repetir; <br>
&nbsp;&nbsp;&nbsp; c) O ator preenche os dados e o caso de uso retorna para o passo 2.

##### &nbsp;&nbsp;&nbsp;  Fluxo alternativo (4): Cadastro de afazer
&nbsp;&nbsp;&nbsp; a) No passo 2, o ator seleciona o cadastro de uma tarefa "afazer"; <br>
&nbsp;&nbsp;&nbsp; b) O sistema solicita o questionário com a descrição, dias, horários e se a tarefa deve se repetir; <br>
&nbsp;&nbsp;&nbsp; c) O ator preenche os dados e o caso de uso retorna para o passo 2.

##### &nbsp;&nbsp;&nbsp;  Fluxo alternativo (5): Cadastro de horário vago
&nbsp;&nbsp;&nbsp; a) No passo 2, o ator seleciona o cadastro de uma tarefa "horário vago"; <br>
&nbsp;&nbsp;&nbsp; b) O sistema solicita o questionário com a opção de preencher ou não horários vagos; <br>
&nbsp;&nbsp;&nbsp; c) O ator preenche os dados e o caso de uso retorna para o passo 2.
