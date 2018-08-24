var angular = require('angular');

module.exports = angular
  .module('mClipboardCopy', [])
  .service('mClipboardCopyService', require('./m-clipboard-copy.service'))
  .directive('mClipboardCopy', require('./m-clipboard-copy.directive')).name;
