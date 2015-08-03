angular.module('minhasDiretivas', [])
.directive('meuPainel' , function(){

		var ddo 	= {}; //directive definition object (DDO)
		ddo.restrict = "AE";
		ddo.transclude = true;

		ddo.scope = {
			titulo: '@'
		};

		ddo.templateUrl = 'js/directives/meu-painel.html';


		return ddo;
	});