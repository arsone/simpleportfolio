(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    //videogular integration
    'ngSanitize',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls'
  ])

    .controller('MediaCtrl',
      ["$sce", function($sce) {
        this.config = {
          sources: [
            {src: $sce.trustAsResourceUrl("https://s3.amazonaws.com/adamsalberg.com/portfoliodemo/assets/thrills_loop.mp3"), type: "audio/mpeg"}
          ],
          theme: {
            url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
          }
        };
      }]
    )
    
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {

    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: true
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
