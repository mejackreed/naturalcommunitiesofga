'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
factory('Description', function($resource) {
	return $resource('/api/desc', {}, {
		query: {
			method: 'GET',
			data: {
				ecoregion: 'ecoregion',
				commcat: 'commcat',
				comm: 'comm',
			}
		}
	})
})

// 'use strict';

// /* Services */


// // Demonstrate how to register services
// // In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');