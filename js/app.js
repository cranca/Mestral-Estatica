$(document).ready(function() {

  // FOUNDATION INIT
  $(document).foundation();

  // CARRUSELES
  $(".-carrusel-un-item--sin-controles").owlCarousel({
    autoPlay: true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    pagination : false
  });

  $(".-carrusel-tres-items--paginacion").owlCarousel({
    autoPlay: true,
    navigation: false,
    pagination: true,
    items : 3,
    itemsDesktop : [1200,3],
    itemsDesktopSmall : [400,1]
  });

  $(".-carrusel-tres-items--navegacion").owlCarousel({
    autoPlay: false,
    navigation: true,
    navigationText: ["←","→"],
    pagination: false,
    items : 3,
    itemsDesktop : [900,2],
    itemsDesktopSmall : false,
    itemsTablet: [600,2],
    itemsMobile : [480,1] 
  });

  $(".-carrusel-cuatro-items--navegacion").owlCarousel({
    autoPlay: false,
    navigation: true,
    navigationText: ["←","→"],
    pagination: false,
    items : 4,
    itemsDesktop : [1200,3],
    itemsDesktopSmall : [400,1]
  });

  // MENU
  $('.menu-disparador').click(function() {
    $('.menu-top').toggle('fast');
  });

  // GALERIA
  $('.-galeria a').touchTouch();

});
