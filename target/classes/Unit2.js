if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Unit2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Unit2'.");
}var Unit2 = function (_, Kotlin) {
  'use strict';
  function main(args) {
    window.alert('Hello, World!');
  }
  var package$ru = _.ru || (_.ru = {});
  var package$geekbrainswebui = package$ru.geekbrainswebui || (package$ru.geekbrainswebui = {});
  package$geekbrainswebui.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('Unit2', _);
  return _;
}(typeof Unit2 === 'undefined' ? {} : Unit2, kotlin);

//# sourceMappingURL=Unit2.js.map
