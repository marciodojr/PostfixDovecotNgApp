# PostfixDovecotNgApp

Frontend em Angular 5 e Material design lite para gestão de domínios e emails utilizados pelo postfix e dovecot. Permite manipular domínios, emails e configurar o redirecionamento de mensagens para emails de terceiros.

# Como instalar
```sh
git clone https://github.com/marciodojr/PostfixDovecotNgApp
cd PostfixDovecotNgApp
npm install
ng serve
```

# Dependências

- Angular CLI: 1.6.8
- Node: 8.10.0
- NPM: 5.4.2


## Observação

O repositório PostfixDovecotAppServer possui um servidor de api para rodar em conjunto com este projeto. Em ambientes de desenvolvimento é necessário habilitar o **cors** no navegador. Isso pode ser feito utilizando extensões como [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) ou desabilitando diretamente no navegador.
