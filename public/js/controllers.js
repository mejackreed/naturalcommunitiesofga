'use strict';

function AppCtrl($scope, $http) {

}


function EcoregionCtrl($scope, $http) {
	//$scope.getEcoregion = function() {
	$http({
		method: 'GET',
		url: '/api/ecoregion'
	}).
	success(function(data, status, headers, config) {
		//console.log(data)
		$scope.data = data.data;
	}).
	error(function(data, status, headers, config) {
		$scope.name = 'Error!'
	});
	//}
	//$scope.getEcoregion()


}

function CommCatCtrl($scope, $http, $location) {
	$scope.init = function(ecoregion) {
		$scope.ecoregion = ecoregion
		$scope.getData()
		$scope.getOne()
	}

	$scope.go = function(name) {
		console.log(name)
	}

	$scope.getData = function() {
		$scope.loc = $location.path()
		console.log($scope.loc)
		$http({
			method: 'GET',
			url: '/api/ecoregion/' + $scope.ecoregion + '/communitycategory'
		}).
		success(function(data, status, headers, config) {
			//	console.log(data)
			$scope.data = data.data;
		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}

	$scope.getOne = function() {
		$http({
			method: 'GET',
			url: '/api/getone/' + $scope.ecoregion
		}).
		success(function(data, status, headers, config) {
			//console.log(data)
			$scope.eco = data.data;
		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
}

function CommCtrl($scope, $http, $location) {
	$scope.init = function(ecoregion, commcat, record) {
		$scope.ecoregion = ecoregion;
		$scope.commcat = commcat;
		$scope.record = record;
		$scope.getData()
		$scope.getOne()
	}
	$scope.getData = function() {
		$http({
			method: 'GET',
			url: '/api/ecoregion/' + $scope.ecoregion + '/communitycategory/' + $scope.commcat
		}).
		success(function(data, status, headers, config) {
			//console.log(data)
			$scope.data = data.data;
		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
	$scope.getOne = function() {
		$http({
			method: 'GET',
			url: '/api/getone/' + $scope.ecoregion + '/' + $scope.commcat
		}).
		success(function(data, status, headers, config) {
			//console.log(data)
			$scope.eco = data.data;
			$scope.comm = data.data
		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
}

function SpeciesCtrl($scope, $http, $location) {
	$scope.init = function(ecoregion, commcat, community) {
		$scope.ecoregion = ecoregion;
		$scope.commcat = commcat;
		$scope.community = community;
		$scope.getData()
		$scope.getOne()
	}
	$scope.getData = function() {
		$http({
			method: 'GET',
			url: '/api/ecoregion/' + $scope.ecoregion + '/communitycategory/' + $scope.commcat + '/community/' + $scope.community
		}).
		success(function(data, status, headers, config) {
			$scope.data = data.data;			
			var lifeform = function(val) {
				return val.lifeform.name
			}
			var lifeformtype = function(val) {
				return val.lifeformtype.name
			}
			$scope.lifeforms = _.map(_.uniq($scope.data, lifeform), lifeform)
			$scope.lifeform = $scope.lifeforms[0]
			$scope.lifeformtypes = _.map(_.uniq($scope.data, lifeformtype), lifeformtype)
			$scope.lifeformtype = $scope.lifeformtypes[0]
		}).


		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
	$scope.getOne = function() {
		$http({
			method: 'GET',
			url: '/api/getone/' + $scope.ecoregion + '/' + $scope.commcat + '/' + $scope.community
		}).
		success(function(data, status, headers, config) {
			//console.log(data)
			$scope.comm = data.data;

		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
}

function RecordCtrl($scope, $http, $location) {
	$scope.init = function(ecoregion, commcat, community, record) {
		$scope.ecoregion = ecoregion;
		$scope.commcat = commcat;
		$scope.comm = community;
		$scope.record = record;
		$scope.getData()
	}

	$scope.getData = function() {
		$http({
			method: 'GET',
			url: '/api/ecoregion/' + $scope.ecoregion + '/communitycategory/' + $scope.commcat + '/community/' + $scope.comm + '/record/' + $scope.record
		}).
		success(function(data, status, headers, config) {
			//console.log(data)
			$scope.data = data.data[0];
		}).
		error(function(data, status, headers, config) {
			$scope.name = 'Error!'
		});
	}
}



function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];