angular.module('fanReplay', [
  'ui.bootstrap',
])
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
