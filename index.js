(function(ko){
  
  ko.bindingHandlers.toggleClick = {
    init: function(element, valueAccessor){
      var observable = valueAccessor();
      ko.utils.registerEventHandler(element, "click", function () {
        var val = observable();
        observable(!val);
      });
    }
  };

})(ko);