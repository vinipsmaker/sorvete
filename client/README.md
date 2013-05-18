Sorvete Cliente
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

Como usar o Cordova
=========================================================

Como existe a grande possibilidade da aplicação do cliente usar o [**cordova**][site_cordova], então existe alguns facilitadores para usá-lo em conjunto com o **grunt**, usando o [**cordova-cli**][site_cordova_cli].

Você pode conectar o aparelho no computador e colocar a **SDK** que você usa no seu **PATH**:

```shell
export PATH="${PATH}:node_modules/.bin/"
```

Em seguida, você pode executar o seguinte comando para **construir**, **instalar** e **executar** o programa no **android**:
```shell
grunt debug:android
```
Ou, para o **blackberry**:
```shell
grunt debug:blackberry
```
Ou, para o **IOS**:
```shell
grunt debug:ios
```

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
grunt linter
```

Executando testes de TDD/BDD
---------------------------------------------------------

O **grunt** já esta configurado com testes automatizados usando o **jasmine** usando o **phantom**.

Para executar os testes, basta executar o comando:

```shell
grunt jasmine
```

Instalando as bibliotecas de terceiros
=========================================================

Esta sendo usado o [**grunt-bower-task**][site_grunt_bower_task] para resolver e baixar os pacotes que a aplicação possa precisar. Para fazer isso, basta executar o comando:

```shell
grunt get_deps
```

Mas, isso já esta integrado com o **npm**, então não precisa executar essa tarefa se você já executou no começo:

```shell
npm install
```

[site_jasmine]: http://pivotal.github.io/jasmine/ "Link para o site do jasmine BDD/TDD"
[site_linter]: https://github.com/circusbred/grunt-linter "Link para o grunt-linter"
[site_jshint]: http://www.jshint.com/ "Site da ferramenta de qualidade de codigo JSHint"
[site_grunt]: http://gruntjs.com/ "Site da ferramente de build"
[site_cordova]: http://cordova.apache.org "Site do Cordova"
[site_cordova_cli]: https://github.com/apache/cordova-cli "Site do cordova-cli"
[site_grunt_bower_task]: https://github.com/yatskevich/grunt-bower-task "Site do plugin do grunt para usar o bower"
[site_bower]: https://github.com/bower/bower "Site do bower"

