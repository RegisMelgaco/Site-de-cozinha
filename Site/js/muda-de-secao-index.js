$("#btn-pratos-novos").click(function(){
    $("#btn-pratos-novos").addClass("btn-primary");
    $("#btn-recomendacao").removeClass("btn-primary");
    $("#btn-promocoes").removeClass("btn-primary");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").addClass("some");

    window.scrollTo(0, x); 
});

$("#btn-recomendacao").click(function(){
    $("#btn-pratos-novos").removeClass("btn-primary");
    $("#btn-recomendacao").addClass("btn-primary");
    $("#btn-promocoes").removeClass("btn-primary");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").removeClass("some");
    $("#lista-recomendacao").addClass("some");
    $("#lista-promocoes").removeClass("some");
    
    window.scrollTo(0, x);
});

$("#btn-promocoes").click(function(){
    $("#btn-pratos-novos").removeClass("btn-primary");
    $("#btn-recomendacao").removeClass("btn-primary");
    $("#btn-promocoes").addClass("btn-primary");
    
    var x = $(window).scrollTop();
    
    $("#lista-pratos-novos").addClass ("some");
    $("#lista-recomendacoes").addClass("some");
    $("#lista-promocoes").removeClass("some");
    
    window.scrollTo(0, x);
});