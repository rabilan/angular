app.controller('indexController',['$scope',function($scope){
$scope.message="Hello Angular!";

$scope.postData = function(){
	alert($scope.username);

	}


	

	$scope.countries = [
		{
			"country_id" : 1,
			"country_name" : "uk"
		},
		{
			"country_id" : 2,
			"country_name" : "us"
		},
		{
			"country_id" : 3,
			"country_name" : "india"
		}

	];


	}]);
