

$(document).ready(function(){
  $('.news').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

$(document).ready(function(){
  $('.parceirosImg').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});

$(document).ready(function(){
  $('.itemLancamento').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
});

$(document).ready(function(){
  $('.colores').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});



 