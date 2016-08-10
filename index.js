(function(){

  'use strict';

  var copyButton = document.getElementById('js-copy-button');

  copyButton.addEventListener('click', function() {
    try {
      console.log('copy', document.execCommand('copy'));
    } catch(e) {
      console.error(e);
    }
  }, false);

  //----------------------------------------------------------------------------

  var pasteInput = document.getElementById('js-paste-input');

  pasteInput.addEventListener('keypress', function(event) {
    var key = event.which || event.keyCode;

    if (key !== 13) {
      return;
    }

    try {
      console.log('paste', document.execCommand('paste'));
    } catch(e) {
      console.error(e);
    }
  }, false);

  //----------------------------------------------------------------------------

  window.addEventListener('cut', function(event) {
    console.log('cut event', event);
  }, false);

  window.addEventListener('copy', function(event) {
    console.log('copy event', event);
  }, false);

  window.addEventListener('paste', function(event) {
    console.log('paste event', event);
  }, false);

  //----------------------------------------------------------------------------

  console.log('is support copy?', document.queryCommandSupported('copy'));
  console.log('is support paste?', document.queryCommandSupported('paste'));

}());
