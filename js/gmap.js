/**
*
* -----------------------------------------------------------------------------
*
* Template : SEO Ninja HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

// gmap init
function initialize() {
 "use strict";
  var mapOptions = {
	zoom: 15,
	scrollwheel: false,
	center: new google.maps.LatLng(39.92757,-83.160207)
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
	  mapOptions);


  var marker = new google.maps.Marker({
	position: map.getCenter(),
	animation:google.maps.Animation.BOUNCE,
	icon: 'images/map-marker.png',
	map: map
  });

}

google.maps.event.addDomListener(window, 'load', initialize);