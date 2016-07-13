
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    // console.log('Main!');
    $scope.message = 'Hey now! What that is sound?';
    $scope.messages = 'some more stuff';
    var msg = 'a non scoped messaged';
    // console.log(TodoService);


    var todos;
    TodoService.readAll()
                .then(function(){
                  todos = TodoService.todos;
                  console.log(todos);
                });
    TodoService.create();
    TodoService.delete();
    TodoService.update();
  }
})();
