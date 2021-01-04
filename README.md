# Gesco (Gestión Contable)

## Compiler Pug

For Development
```shell
$ yarn pug --pretty src/pug/pages/ -o dist/ -p src/pug/includes/
```

For Production
```shell
$ yarn pug src/pug/pages/ -o dist/ -p src/pug/includes/
```

## Compiler TypeScript

```shell
$ yarn tsc
```

## Compiler Sass

```shell
$ yarn node-sass src/scss --output dist/assets/css
```