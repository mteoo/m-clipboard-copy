# MClipboard Copy
A simple Angular Component to copy texts/values to clipboard.

## Modo de usar / How to use

##### Adicionar a depêndencia ao projeto / Add project dependency

```js
require('.../m-clipboard-copy')
```

##### HTML

```html
<div class="col-md-12">
    <a ng-href="{{vm.link}}" target="_blank">
        <small class="text-muted">https://www.google.com.br</small>
    </a> 
    <a href="" class="btn" m-clipboard-copy="{{vm.link}}">Copy link...</a>
</div>
```

#### m-clipboard-copy

cw-clipboard pode receber um bind {{}} do Angular ou um texto / m-clipboard-copy may receive a Angular {{}}  or a text.
```html
<a href="" class="btn" m-clipboard-copy="{{vm.texto}}">Copy text</a>
```
```html
<a href="" class="btn" m-clipboard-copy="Text to copy...">Copy text</a>
```
