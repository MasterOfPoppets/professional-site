/*global angular*/

(function () {
  'use strict';
  angular.module('gh.directives', [])
  
  .directive('ghScrollingAnchor', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function (event) {
          $('html, body').stop().animate({
            scrollTop: $(attrs.href).offset().top
          }, 1500, 'easeInOutExpo');
          
          event.preventDefault();
        });
      }
    };
  })

  .directive('ghSocialLink', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/gh-social-link.html'
    };
  });
}());