module.exports = directive;
directive.$inject = ['mClipboardCopyService'];

function directive(mClipboardCopyService) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        mClipboardCopyService.copy(attrs.cwClipboard);
      });
    }
  };
}
