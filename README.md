# Gesco (Gestor Contable)

## Pug Compiler

For Development
```shell
$ yarn pug --pretty src/pug/pages/ -o dist/ -p src/pug/includes/
```

For Production
```shell
$ yarn pug src/pug/pages/ -o dist/ -p src/pug/includes/
```

## TypeScript Compiler

```shell
$ yarn tsc
```

## Sass Compiler

```shell
$ yarn node-sass src/scss --output dist/assets/css
```