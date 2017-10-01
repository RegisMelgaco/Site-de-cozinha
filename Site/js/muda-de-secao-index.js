$("#btn-pratos-novos").click(function(){
    $("#btn-pratos-novos").removeClass("btn-danger");
    $("#btn-recomendacao").addClass("btn-danger");
    $("#btn-promocoes").addClass("btn-danger"); 
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");
});

$("#btn-recomendacao").click(function(){
    $("#btn-pratos-novos").addClass("btn-danger");
    $("#btn-recomendacao").removeClass("btn-danger");
    $("#btn-promocoes").addClass("btn-danger");
    
    $("#lista-pratos-novos").addClass("some");
    $("#lista-recomendacoes").removeClass("some");
    $("#lista-promocoes").addClass("some");
});

$("#btn-promocoes").click(function(){
    $("#btn-pratos-novos").addClass("btn-danger");
    $("#btn-recomendacao").addClass("btn-danger");
    $("#btn-promocoes").removeClass("btn-danger");
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").removeClass("some");
});