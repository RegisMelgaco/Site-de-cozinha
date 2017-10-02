$("#btn-pratos-novos").click(function(){
    $("#btn-pratos-novos").addClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
	$("#btn-almocos").removeClass("disabled");
	$("#btn-jantares").removeClass("disabled");
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");
	$("#lista-almocos").addClass("some");
	$("#lista-jantares").addClass("some");
});

$("#btn-recomendacao").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").addClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
	$("#btn-almocos").removeClass("disabled");
	$("#btn-jantares").removeClass("disabled");
    
    $("#lista-pratos-novos").addClass("some");
    $("#lista-recomendacoes").removeClass("some");
    $("#lista-promocoes").addClass("some");
	$("#lista-almocos").addClass("some");
	$("#lista-jantares").addClass("some");
});

$("#btn-promocoes").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").addClass("disabled");
	$("#btn-almocos").removeClass("disabled");
	$("#btn-jantares").removeClass("disabled");
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").removeClass("some");
	$("#lista-almocos").addClass("some");
	$("#lista-jantares").addClass("some");
});

$("#btn-almocos").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
	$("#btn-almocos").addClass("disabled");
	$("#btn-jantares").removeClass("disabled");
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");
	$("#lista-almocos").removeClass("some");
	$("#lista-jantares").addClass("some");
});

$("#btn-jantares").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
	$("#btn-almocos").removeClass("disabled");
	$("#btn-jantares").addClass("disabled");
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");
	$("#lista-almocos").addClass("some");
	$("#lista-jantares").removeClass("some");
});