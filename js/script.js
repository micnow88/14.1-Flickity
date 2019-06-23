'use strict';

//zmienne dla Mustache 
var templateSlide = document.getElementById('template-slide').innerHTML;

Mustache.parse(templateSlide);

var listSlide = '';

var resultCell = document.getElementsByClassName('carousel-cell');

for(var i = 0; i < cellData.length; i++) {
  listSlide = Mustache.render(templateSlide, cellData[i]);
  resultCell[i].insertAdjacentHTML('beforeend', listSlide);
}

//Carousel
var mainCarousel = document.querySelector('.main-carousel');
var flkty = new Flickity( mainCarousel, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  adaptiveHeight: true,
  pageDots: false,
  hash: true,
  cellSelector: '.carousel-cell',
  initialIndex: 1
});

var flkty = new Flickity( '.main-carousel', {
  groupCells: true
});

//Reset button
var buttonReset = document.getElementById('reset-button');
var initialIndex = document.getElementById('carousel-cell1');

buttonReset.addEventListener( 'click', function( event ) {
  flkty.selectCell(initialIndex);
});

//Progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

//Mapy
window.initMap = function() {
  var rynek = {lat: 50.678995, lng: 21.749001};
  
  //Pozycjonowanie i ustawienia mapy
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: rynek
  });
    
  //Marker początkowy
  var marker = new google.maps.Marker({
    position: rynek,
    map: map
  });

  //Pętla dla markerów dla slajdów
  for (var i=0; i < cellData.length; i++) {
    var markerData = cellData[i].cords;
    var markerCell = new google.maps.Marker({
      position: markerData,
      map: map
  });
  }
}
