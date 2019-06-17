'use strict';

var mainCarousel = document.querySelector('.main-carousel');
var flkty = new Flickity( mainCarousel, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  adaptiveHeight: true,
  pageDots: false,
  hash: true,
  cellSelector: '.carousel-cell',
  initialIndex: 1
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  groupCells: true
});

var buttonReset = document.getElementById('reset-button');
var initialIndex = document.getElementById('carousel-cell1');

buttonReset.addEventListener( 'click', function( event ) {
  flkty.selectCell(initialIndex);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});