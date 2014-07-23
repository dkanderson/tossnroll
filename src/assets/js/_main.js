/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
    }
  },
  about: {
    init: function(){
      ///
    }
  },
  // About us page, note the change from about-us to about_us.
  location: {
    init: function() {
      // JavaScript to be fired on the location page

        var map;

        function initialize() {
          var tossnroll = new google.maps.LatLng(18.0202789, -76.7760244);

          var stylez = [
              {
                featureType: "all",
                elementType: "all",
                stylers: [
                  { saturation: 20 },
                  {hue: "#bb9214"},
                  {}
                ]
              }
          ];

          var mapOptions = {
                center: tossnroll,
                zoom: 15,
                mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, '1greatgray']
              }
          };

         map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

         var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
         map.mapTypes.set('1greatgray', mapType);
         map.setMapTypeId('1greatgray');


         var iconBase = '/tossnroll/assets/img/';
         var marker = new google.maps.Marker({
            position: tossnroll,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title:"TossnRoll",
            icon: iconBase + 'tr-marker.png'
        });

        }

        google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, "resize", function() {
           var center = map.getCenter();
           google.maps.event.trigger(map, "resize");
           map.setCenter(center);
          });
      }
    },
    love: {
      init: function(){
        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'tossandroll',
            clientId: '*****',
            limit: 25,
            resolution: 'standard_resolution',
            error: function(err){
              console.log('fail: ' + err);
            },
            template: '<a class="love" data-likes="{{likes}}" href="{{link}}"><span class="meta"><i class="fa fa-heart"></i> {{likes}}</span><img class="img-responsive" src="{{image}}" alt="{{caption}}"></a>',
            after: function(){
              
              // console.log(instapics);
              var container = document.querySelector('#instafeed');
              var msnry;

              msnry = new Masonry( container, {
                    // options
                columnWidth: 5,
                itemSelector: '.love',
                gutter: 10

              });

              imagesLoaded(container, function(){
                  var instapics = $('#instafeed').find('a');
                  
                  _.each(instapics, function(i){
                     if(i.getAttribute('data-likes') > 60){
                      i.setAttribute('class', 'love w2');
                     }
                  });
                  
                  msnry.layout();
              });

            }

        });
        feed.run();
        
      }
    }
  };

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
