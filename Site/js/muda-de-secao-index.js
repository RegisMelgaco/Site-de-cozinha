$("#btn-pratos-novos").click(function(){
    $("#btn-pratos-novos").addClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");
});

$("#btn-recomendacao").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").addClass("disabled");
    $("#btn-promocoes").removeClass("disabled");
    
    $("#lista-pratos-novos").addClass("some");
    $("#lista-recomendacoes").removeClass("some");
    $("#lista-promocoes").addClass("some");
});

$("#btn-promocoes").click(function(){
    $("#btn-pratos-novos").removeClass("disabled");
    $("#btn-recomendacao").removeClass("disabled");
    $("#btn-promocoes").addClass("disabled");
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").removeClass("some");
});