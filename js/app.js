function parsePrice(argument) {
    return numeral(argument).format('$0.00');
}
(function() {
	var x = 0;
	for(day in days){
		//idk what this is
		var h = 82;
		if (days[day].details != undefined){
			h += 10

			for(detail in days[day].details){
				h += 49;
				if(days[day].details[detail].amount != undefined){
					x++;
					days[day].details[detail].amtStr = parsePrice(days[day].details[detail].amount);
					console.log(parsePrice(days[day].details[detail].amount));
				}	
			}
		}
		days[day].height = h + 'px';

		//this parses the price values
	}
})();
angular.module('euro-app', [])
	.controller('Euro', ['$scope', function($scope){
		$scope.data = days;
		$scope.parsePrice = parsePrice;
		$scope.isArray = function(arg){
			return $.isArray(arg);
		}
		$scope.isThere = function(arg){
			return !(arg === undefined);
		}
		$scope.detailCost = function(data){
			var sum = 0;
			for(datum in data){
				if($scope.isThere(data[datum].details)){
					for(detail in data[datum].details){
						if($scope.isThere(data[datum].details[detail].amount)){
							sum += data[datum].details[detail].amount;
						}
					}
				}
			}
			return sum;
		}
		$scope.foodCost = function(data){
			return data.length * 27.18;
		}
		$scope.exCost = function(data){
			return data.length * 5;
		}
		$scope.totCost = function(data){
			return 	parseFloat($scope.detailCost(data)) + 
					parseFloat($scope.foodCost(data)) + 
					parseFloat($scope.exCost(data));
		}
}]);
