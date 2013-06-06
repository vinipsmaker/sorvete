Sorvete Server
=========================================================

> Projeto desenvolvido de forma **pouco invasiva** visando **otimizar o uso de bateria** em códigos para dispositivos moveis feitos em **JavaScript**, utilizando **processamento em nuvem**.

Esse componente é o código do servidor, que vai rodar na nuvem e receber requisições para rodar os códigos dos clientes.

Instalar dependências
=========================================================

Inicialmente, você só precisa do **nodejs** para instalar o resto das dependências via **npm**. A lista de dependências seria algo assim:

* node.js
* npm install --save-dev

Como o projeto utiliza o [**grunt**][site_grunt], talvez seja interessante fazer:

```shell
npm install -g grunt-cli
npm install --save-dev
```

Construir o aplicativo
=========================================================

Para executar os testes e gerar o servidor, utilize o [**grunt**][site_grunt] dando o comando:

```shell
grunt
```

Por padrão, quando você constrói o aplicativo, todos os testes vão ser executados.

Usando os testes(Jasmine com phatom e linter)
=========================================================

Os seguintes softwares de teste já estão incluídos para uso:

* [Jasmine][site_jasmine]
* [grunt Linter][site_linter]

Executando todos os testes
---------------------------------------------------------

Para executar todos os testes, é só usar o [**grunt**][site_grunt] com o seguinte comando:

```shell
grunt test
```

Ou, usando diretamente o **npm**:

```shell
npm test
```

Executando testes de validação de sintaxe
---------------------------------------------------------

O [**grunt-linter**][site_linter] pode usar alguns validadores, mas o [**jshint**][site_jshint] é o que esta configurado.

Para executar o teste, basta executar o comando:

```shell
grunt test_syntax
```

Executando testes de TDD/BDD
---------------------------------------------------------

O **grunt** já esta configurado com testes automatizados usando o **jasmine** usando o **phantom**.

Para executar os testes, basta executar o comando:

```shell
grunt jasmine
```

[site_jasmine]: http://pivotal.github.io/jasmine/ "Link para o site do jasmine BDD/TDD"
[site_linter]: https://github.com/circusbred/grunt-linter "Link para o grunt-linter"
[site_jshint]: http://www.jshint.com/ "Site da ferramenta de qualidade de codigo JSHint"
[site_grunt]: http://gruntjs.com/ "Site da ferramente de build"

