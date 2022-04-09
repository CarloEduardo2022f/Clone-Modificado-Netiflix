$('.owl-carousel').owlCarousel({
    loop:true, //infinito loop
    margin:10, //Margem entres os filmes
    nav:true, //habilitar botoes de navegação
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})