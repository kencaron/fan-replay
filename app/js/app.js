angular.module('fanReplay', [
  'ui.bootstrap',
])
.directive('pendingIndicator', function(){
  return {
    restrict: 'A',
    link: function(scope, element) {
      // setup the container for ImagesLoaded ... note instead of using
      // this directive on an individual image, you may consider using
      // it on the element that contains many images...
      scope.imagesLoaded = imagesLoaded(element);
      // start your progress/loading animation here
      // (or whenever you attempt to load the images)
      scope.imagesLoaded.on('always', function() {
        //console.log('always event: Triggered after all images have been either loaded or confirmed broken.');
        // end the progress/loading animation here for all images or do
        // it individually in the progress event handler below
      });
      scope.imagesLoaded.on('done', function() {
        //console.log('done event: Triggered after all images have successfully loaded without any broken images.');
      });
      scope.imagesLoaded.on('fail', function() {
        //console.log('fail event: Triggered after all images have been loaded with at least one broken image.');

        var slide = _.findWhere(scope.main.slides, {src: element.attr('src')});
        slide.src = 'http://placehold.it/640x640';
        console.log(slide);
      });
      scope.imagesLoaded.on('progress', function(instance, image) {
        //console.log('proress event: Triggered after each image has been loaded.', instance, image);
        // end the progress/loading animation here or do it for all images in the always
        // event handler above
      });
    }
  }
})
.controller('MainCtrl', function($scope, $modal) {

  var Main = function Main() {
    this.init();
  };

  Main.prototype.init = function init() {
    var self = this;

    self.slides = window.gp_slides;
    self.slideIndex = 0;
    self.slides[self.slideIndex].active = true;

  };

  $scope.main = new Main();
});