function parsePrice(argument) {
    return numeral(argument).format('$0.00');
}
(function() {
	for(day in days){
		//idk what this is
		var h = 82;
		if (days[day].details != undefined){
			h += 10
			for(detail in days[day].details) h += 49;

			for(detail in days[day].details){
				if(days[day].details[detail].amount != undefined)
					days[day].details[detail].amount = parsePrice(days[day].details[detail].amount);
			}
		}
		days[day].height = h + 'px';

		//this parses the price values

	}
})();
angular.module('euro-app', [])
	.controller('Euro', ['$scope', function($scope){
		$scope.data = days;
		$scope.isArray = function(arg){
			return $.isArray(arg);
		};
		$scope.isThere = function(arg){
			return !(arg === undefined);
		}
}]);
