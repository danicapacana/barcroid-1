angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // $scope.state.go('search');
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'New Transaction', id: 1 },
    { title: 'History', id: 2 },
    
  ];
})

.controller('ProfileCtrl', function($scope) {
  $scope.profiles = [
    { name: 'Pacana, Danica', username: 'danicapacana', email: 'danica.pacana1195@gmail.com', contact: '09351370463', address: 'Balulang', id: 1 },
  ];
})

.controller('viewitem', function($scope){
  $scope.item = [
  { title: 'Coffee', price: '25', qty: '1'},
  { title: 'Milk', price: '100', qty: '5'},
  { title: 'Shampoo', price: '6', qty: '2'},
  { title: 'Soap', price: '20', qty: '3'}, ];
})

.controller('AddItemTransaction', ['$scope', function($scope) {
        $scope.master = [];

        $scope.addCustomer = function (customer)
        { 
              $scope.master.push({
              id:$scope.master.length,
              fullname: $scope.fullname,
              address: $scope.address,
              contact: $scope.contact,
              email: $scope.email,
              birthdate: $scope.birthdate });
        }
}])

/////////////////////////////////////////////////////////////////Admin Side

.controller('adminuser', function($scope) {
  $scope.profiles = [
    { name: 'Daug, Nikki Monique', username: 'kinkin', email: 'daugnik@gmail.com', contact: '09069748094', address: 'El Salvador City', id: 1 },
  ];
})

/////////////////////////////////////////////////////////////////End of Admin Side

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
