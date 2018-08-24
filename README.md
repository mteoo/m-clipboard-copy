# m-clipboard-copy
A simple Angular Component to copy texts/values to clipboard.

## Modo de usar / How to use

##### Adicionar a depêndencia ao projeto / Add project dependency

```js
require('.../m-clipboard-copy')
```

##### No html / In html

```html
<div class="col-md-12">
    <a ng-href="{{vm.link}}" target="_blank">
        <small class="text-muted">https://www.google.com.br</small>
    </a> 
    <a href="" class="btn" m-clipboard-copy="{{vm.link}}">Copy link...</a>
</div>
```

#### m-clipboard-copy

O atributo cw-clipboard pode receber um bind {{}} do Angular / m-clipboard-copy may receive a Angular {{}}  or a text.
```html
<a href="" class="btn" m-clipboard-copy="{{vm.texto}}">Copy text</a>
```
Ou um texto simples
```html
<a href="" class="btn" m-clipboard-copy="Texto copiado...">Copy text</a>
```
