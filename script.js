// Code goes here

var app = angular.module('DemoApp', ['ngMaterial']);

app.controller('MainCtrl', function($scope) {
  $scope.analytics = {
                    'Twitter': [
                        'Following',
                        'Followers',
                        'Tweets'
                    ],
                    'Facebook': [
                        'People engaged',
                        'Likes',
                        'Clicks',
                        'Views'
                    ],
                    'LinkedIn': [
                        'Overview'
                        
                    ]
                };
	 

	$scope.$watch('type', function(newval, oldval) {
	  if( newval ) {
	    $scope.level2 = $scope.analytics[newval];
	  }
	  else {
	    $scope.level2 = [];
	  }
	  
	  // delete the dependent selection, if the master changes
	  if( newval !== oldval ) {
	    $scope.metrics = null;
	  }
	});
});
