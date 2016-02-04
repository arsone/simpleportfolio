app.controller('HomeController', function($scope, $http) {
	$scope.jobs = [];
	$http.get('assets/json/workhist.json').success(function(data) {
	console.log("success!");
	$scope.jobs = data.jobs;
		console.log(data.jobs);
	});
});