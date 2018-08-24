var angular = require('angular');

module.exports = service;

service.$inject = ['$window'];

function service($window) {
  var body = angular.element($window.document.body);
  var textarea = angular.element('<textarea/>');
  textarea.css({
    position: 'fixed',
    opacity: '0'
  });

  function _copy(toCopy) {
    textarea.val(toCopy);
    body.append(textarea);
    textarea[0].select();

    try {
      var successful = document.execCommand('copy');
      if (!successful) throw successful;
    } catch (err) {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', toCopy);
    }

    textarea.remove();
  }

  return {
    copy: _copy
  };
}
