angular.module('alurapic').controller('FotosController', function($scope, $http) {
	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('v1/fotos')
	.success(function(dataFotos){ // dataFotos são as fotos que o $http.get pegou do link ou local
		console.log(dataFotos);
		$scope.fotos = dataFotos; // incliu o dataFotos dentro do $scope
	})
	.error(function(erro){
		console.log(erro);
	});

/*
	var promise = $http.get('v1/fotos'); //pega as imagens do link ou local
	promise.then(function(retorno){ // retorna as imagens para a varialvel quando estiver pronto
		$scope.fotos = retorno.data; //callback com as imagens (data)
	}).catch(function(error){ // retornar erro caso aconteça algo
		console.log(error); //mostra erro no console
	});
*/
});