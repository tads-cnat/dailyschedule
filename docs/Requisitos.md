<table>
  <caption><h2>Matriz de rastreabilidade dos requisitos</h2></caption>
  <tr>
    <td width="33.33%"><strong>Nome do projeto:</strong></td>
    <td colspan="7">Daily Schedule</td>
  </tr>
  <tr>
    <td width="33.33%"><strong>Descrição do projeto:</strong></td>
    <td colspan="7">O Daily Schedule tem como objetivo ajudar na organização dos estudos e rotinas de um estudante no seu dia a dia, através da criação de cronogramas diários, semanais e mensais. Sua interface tem uma boa usabilidade, sendo minimalista e intuitiva.</td>
  </tr>
  <tr>
    <th>ID</th>
    <th>Descrição dos requisitos</th>
    <th>Necessidades, oportunidades, metas e objetivos de negócio</th>
    <th>Objetivos do projeto</th>
    <th>Entregas da EAP</th>
    <th>Design do produto</th>
    <th>Desenvolvimento do produto</th>
    <th>Casos de teste</th>
  </tr>
  <tr>
    <td>RF01</td>
    <td>Criação de cronograma</td>
    <td>O usuário pode criar cronogramas</td>
    <td>A criação de cronogramas faz parte da estratégia do projeto de aumentar a eficiência e produtividade dos nossos usuários</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Interface intuitiva e fácil de usar, onde o usuário poderá inserir as informações do cronograma, tarefas e prazos</td>
    <td>Implementar sistema de criação de cronograma</td>
    <td>Verificação da inserção correta das informações e a exibição correta do cronograma gerado</td>
  </tr>
  <tr>
    <td>RF02</td>
    <td>Cadastro de tarefas</td>
    <td>O usuário vai cadastrar os dias e horários em que terá uma tarefa do tipo aula, matéria, prova, afazer e horário vago</td>
    <td>Implementar um sistema de gerenciamento de rotinas eficiente e prático para os usuários</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Interface intuitiva e fácil de usar, onde o usuário poderá inserir as informações de cada tarefa e prazos
</td>
    <td>Implementar sistema de cadastro de tarefas</td>
    <td>Verificação da inserção correta de tarefas e prazos e a exibição correta do cronograma gerado</td>
  </tr>
  <tr>
    <td>RF03</td>
    <td>Visualização do cronograma</td>
    <td>O usuário poderá visualizar um cronograma presente em sua coleção ou um cronograma público</td>
    <td>Assegurar a execução das atividades dentro do prazo estabelecido</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Garantir que o cronograma seja visualmente agradável e de fácil compreensão para os usuários</td>
    <td>Implementar sistema de visualização do cronograma</td>
    <td>Verificar se a funcionalidade de visualização do cronograma atende aos requisitos especificados e se o banco de dados está sendo atualizado adequadamente</td>
  </tr>
  <tr>
    <td>RF04</td>
    <td>Acesso aos meus cronogramas</td>
    <td>O usuário poderá ver a listagem de seus cronogramas</td>
    <td>Facilitar a visualização e gerenciamento dos cronogramas cadastrados pelos usuários</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>A página deve ter um design intuitivo e agradável, facilitando a navegação e a identificação dos cronogramas cadastrados</td>
    <td>Implementar sistema de listagem de cronogramas</td>
    <td>Verificar se a listagem de cronogramas está sendo exibida corretamente para o usuário, se as opções de visualização e edição estão funcionando corretamente e se o banco de dados está sendo atualizado adequadamente</td>
  </tr>
  <tr>
    <td>RF05</td>
    <td>Modificação do cronograma</td>
    <td>O usuário pode editar e excluir cronogramas</td>
    <td>Possibilitar o gerenciamento de projetos de forma mais eficiente e efetiva, fornecendo as ferramentas necessárias para ajustar e atualizar o cronograma de acordo com as necessidades do projeto</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>A tela de edição do cronograma deve apresentar um layout intuitivo, com botões e ferramentas de fácil acesso para adicionar, editar e excluir as informações do cronograma e suas tarefas</td>
    <td>Implementar sistema de modificação do cronograma</td>
    <td>Devem ser criados casos de teste para garantir a funcionalidade correta da edição do cronograma, testando cenários de adição, edição e exclusão de tarefas, bem como ajuste das datas de início e fim das atividades</td>
  </tr>
  <tr>
    <td>RF06</td>
    <td>Pesquisa de cronograma</td>
    <td>O usuário pode usar uma aba de busca para pesquisar cronogramas públicos</td>
    <td>Melhorar a experiência do usuário e facilitar o compartilhamento de cronogramas entre usuários</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Criar uma interface amigável e intuitiva que permita que o usuário realize buscas de cronogramas públicos</td>
    <td>Implementar a funcionalidade de pesquisa de cronograma</td>
    <td>Testar a funcionalidade de pesquisa em diferentes cenários e garantir que os resultados retornados sejam apenas os cronogramas públicos dos usuários</td>
  </tr>
  <tr>
    <td>RF07</td>
    <td>Cadastro de Usuário</td>
    <td>Permite que os visitantes possam realizar seu cadastro na plataforma Daily Schedule</td>
    <td>Permitir o acesso aos recursos restritos da plataforma apenas a usuários cadastrados</td>
    <td>Especificação dos requisitos do sistema; Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Formulário de cadastro de usuário com campos obrigatórios</td>
    <td>Implementar sistema de gerenciamento de usuários e permissões</td>
    <td>Testar o formulário de cadastro de usuário para verificação de erros e validação dos campos obrigatórios</td>
  </tr>
  <tr>
    <td>RF08</td>
    <td>Autenticação</td>
    <td>Com a efetuação do login os usuários têm acesso ao sistema</td>
    <td>Autenticar usuários</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Login com segurança</td>
    <td>Implementar sistema de autenticação</td>
    <td>Testar se apenas usuários cadastrados têm acesso ao sistema</td>
  </tr>
  <tr>
    <td>RF09</td>
    <td>Configurações de Cronograma</td>
    <td>O usuário poderá configurar opções de privacidade (públcio ou privado) de visualização de seu cronograma</td>
    <td>Melhorar a experiência do usuário e personalizar o cronograma</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Opções de privacidade e visualização</td>
    <td>Implementar sistema de configuração de cronograma</td>
    <td>Testar as diferentes opções de privacidade e visualização</td>
  </tr>
  <tr>
    <td>RF10</td>
    <td>Gerencia do perfil</td>
    <td>Este requisito tem o propósito de habilitar o usuário estudante a consultar e atualizar seus dados de perfil</td>
    <td>Melhorar a experiência do usuário e permitir que ele personalize seu perfil</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Página do perfil do usuário</td>
    <td>Implementar sistema de gerenciamento de perfil</td>
    <td>Testar a atualização de dados de perfil</td>
  </tr>
  <tr>
    <td>RF11</td>
    <td>Lembretes importantes</td>
    <td>O sistema vai lembrar o usuário no cronograma diário sobre deveres importantes, como provas</td>
    <td>Melhorar a organização do usuário e ajudá-lo a cumprir prazos</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Lembretes diários na página do cronograma</td>
    <td>Implementar sistema de gerenciamento de tarefas importantes</td>
    <td>Testar se os lembretes são exibidos corretamente e se ajudam o usuário a cumprir prazos</td>
  </tr>
  <tr>
    <td>RF12</td>
    <td>Notificação por e-mail</td>
    <td>O usuário terá a opção de receber lembretes das tarefas para ele mesmo por e-mail</td>
    <td>Permitir que o usuário compartilhe o link do cronograma</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Adicionar um botão para o compartilhamento do link do cronograma</td>
    <td>Implementar sistema de gerenciamento de envio de e-mails</td>
    <td>Verificar se os e-mails estão sendo enviados corretamente para o endereço de e-mail cadastrado pelo usuário</td>
  </tr>
  <tr>
    <td>RF13</td>
    <td>Compartilhamento do cronograma</td>
    <td>O usuário pode compartilhar seus cronogramas em outras aplicações</td>
    <td>Facilitar o gerenciamento de tarefas e aumentar a produtividade do usuário</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Adicionar um botão "Enviar lembrete por e-mail"</td>
    <td>Implementar botão de compartilhamento de link</td>
    <td>Verificar se o link está sendo copiado corretamente</td>
  </tr>
  <tr>
    <td>RF14</td>
    <td>Exportação do cronograma</td>
    <td>Os cronogramas criados podem ser exportados pelo usuário</td>
    <td>Permitir que o usuário exporte o cronograma para PDF</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Adicionar um botão "Exportar"</td>
    <td>Implementar botão de exportação</td>
    <td>Teste de exportação do cronograma</td>
  </tr>
  <tr>
    <td>RF15</td>
    <td>Cancelamento de conta</td>
    <td>Por questões de ordem éticas, um estudante pode ter seu perfil cancelado pelo administrador da rede</td>
    <td>Assegurar o banimento de contas indevidas e maliciosas</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Interface para cancelar a conta</td>
    <td>Implementar funcionalidade de cancelar a conta</td>
    <td>Verificar se a conta foi corretamente cancelada</td>
  </tr>
  <tr>
    <td>RF16</td>
    <td>Exclusão de cronograma</td>
    <td>Por questões de ordem éticas, um estudante pode ter seu cronograma excluído pelo administrador da rede</td>
    <td>Assegurar a exclusão de cronogramas indevidos e maliciosos</td>
    <td>Desenvolvimento dos serviços RESTful em Django e Implementação das requisições para o backend</td>
    <td>Interface para excluir o cronograma</td>
    <td>Implementar funcionalidade de excluir o cronograma</td>
    <td>Verificar se o cronograma foi corretamente excluído</td>
  </tr>
</table>
