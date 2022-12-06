# Daily Schedule

>Solução em organização acessível para todos os estudantes.

<img src="dslogo.png" width="300" height="200" />

>O Daily Schedule tem como objetivo ajudar na organização dos estudos e rotinas de um estudante no seu dia a dia, através da criação de cronogramas diários, semanais e mensais. Sua interface tem uma boa usabilidade, sendo minimalista e intuitiva.

# Tecnologias Utilizadas

- [Python](https://www.python.org/)
- [Django REST](https://www.django-rest-framework.org/)
- [JavaScript](https://www.javascript.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React](https://pt-br.reactjs.org/docs/lifting-state-up.html)

# Documentação

- [Documento de Visão](https://github.com/tads-cnat/dailyschedule/blob/main/docs/DocumentoDeVisao.md)
- [Glossário](https://github.com/tads-cnat/dailyschedule/blob/main/docs/Glossario.md)
- [Levantamento de Riscos](https://github.com/tads-cnat/dailyschedule/blob/main/docs/LevantamentoDeRiscos.md)
- [Documento de Riscos](https://github.com/tads-cnat/dailyschedule/tree/main/docs/DocumentoDeRisco.md)

# Rodar Backend da aplicação

> passo 1 - instalar biblioteca pip do python :

```sh
sudo apte-get install python3-pip
```

> passo 2 - instalar virtualenv:

```sh
sudo pip install virtualenv
```

> passo 3 - criar ambiente virtual com python

dentro da pasta dailyschedule criar ambiente virtual
```sh
python3 -m venv venv
```

em seguida entrar dentro do ambiente virtual

dentro da pasta dailyschedule criar ambiente virtual
```sh
source venv/bin/activate
```

> passo 4 - instalar dependecias do projeto:

```sh
pip install -r requirements_backend.txt
```

> passo 5 - rodar migrações : 

entre na pasta "backend/core" apartir do terminal usando:

```sh
cd backend/core
```
rode as migraçoẽs

```sh
python3 manage.py migrate
```
> passo 6 - rodar servidor:

```sh
python3 manage.py runserver
```

ambiente intalado com sucesso !!! agora so codar

ps: lembresse de criar sua branch antes de começar a codar

