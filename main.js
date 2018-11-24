$('.grid').masonry({
  itemSelector: '.grid-item'
});


var $grid = $('.grid').isotope({
   itemSelector: '.element-item',
   layoutMode: 'fitRows'
});

var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

$('.filter-button-group').on('click', 'li', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({filter: filterValue});

});
$('.button-group').each( function( i, buttonGroup ) {
   var $buttonGroup = $( buttonGroup );
   $buttonGroup.on( 'click', 'li', function() {
       $buttonGroup.find('.is-checked').removeClass('is-checked');
       $( this ).addClass('is-checked');
   });
});




                //slider
$('.bo-cv1').slick({
  dots: true ,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$('.bo-slider2').slick({
  dots: true ,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    map = new google.maps.Map(
    document.getElementById('bo-map'), {zoom: 4, center: uluru});
    marker = new google.maps.Marker({position: uluru, map: map, icon: "web/img/beetroot.png"});
  }




