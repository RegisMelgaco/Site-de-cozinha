$("#btn-pratos-novos").click(function(){
    $("#btn-pratos-novos").addClass("btn-danger");
    $("#btn-recomendacao").removeClass("btn-danger");
    $("#btn-promocoes").removeClass("btn-danger");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");

    window.scrollTo(0, x); 
});

$("#btn-recomendacao").click(function(){
    $("#btn-pratos-novos").removeClass("btn-danger");
    $("#btn-recomendacao").addClass("btn-danger");
    $("#btn-promocoes").removeClass("btn-danger");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").addClass("some");
    $("#lista-recomendacoes").removeClass("some");
    $("#lista-promocoes").addClass("some");
    
    window.scrollTo(0, x);
});

$("#btn-promocoes").click(function(){
    $("#btn-pratos-novos").removeClass("btn-danger");
    $("#btn-recomendacao").removeClass("btn-danger");
    $("#btn-promocoes").addClass("btn-danger");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").removeClass("some");
    
    window.scrollTo(0, x);
});