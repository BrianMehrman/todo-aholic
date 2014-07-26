var scotchTodo = angular.module('scotchTodo',[]);

function mainController($scope,$http){
  $scope.formData = {};

  // get all todos
  $http.get('api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: '+ data);
    });

  $scope.createTodo = function(){
    console.log($scope.formData)
    $http.post('api/todos',$scope.formData)
      .success(function(data){
        $scope.formData ={}; //clear the form so its ready for next input, (this is where you might add some fancy animation)
        $scope.todos=data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTodo = function(id){
    $http.delete('api/todos/'+id)
      .success(function(data){
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  }
}
