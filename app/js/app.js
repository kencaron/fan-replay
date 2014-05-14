angular.module('fanReplay', [
  'ui.bootstrap',
  'wu.masonry'
])

.controller('ModalCtrl', function($scope, $modalInstance, meta) {

  $scope.slides = meta.slides;
  $scope.slides[meta.slideIndex].active = true;


  $scope.close = function() {
    $modalInstance.close();
  };

  $scope.dismiss = function() {
    $modalInstance.dismiss('cancel');
  };
})

.controller('MainCtrl', function($scope, $modal) {

  var Main = function Main() {
    this.init();
  };

  Main.prototype.init = function init() {
    var self = this;

    self.slides =[
      {
        src: 'http://origincache-frc.fbcdn.net/10299721_1494089717486456_91775130_n.jpg'
      },
      {
        src: 'http://origincache-prn.fbcdn.net/1168790_1434651513452026_2003341997_n.jpg'
      },
      {
        src: 'http://origincache-ash.fbcdn.net/10358328_687208697984810_62498663_n.jpg'
      },
      {
        src: 'http://origincache-frc.fbcdn.net/10296892_243159639207416_1503370301_n.jpg'
      },
      {
        src: 'http://origincache-frc.fbcdn.net/10268755_1447594422147752_393282778_n.jpg'
      },
      {
        src: 'http://origincache-frc.fbcdn.net/10311244_222018504674756_877736244_n.jpg'
      },
      {
        src: 'http://origincache-frc.fbcdn.net/10362342_651947688210689_834029939_n.jpg'
      },
      {
        src: 'http://origincache-ash.fbcdn.net/10375554_242382825885363_1403609769_n.jpg'
      },
      {
        src: 'http://origincache-ash.fbcdn.net/10362120_699895203403326_1945571175_n.jpg'
      },
      {
        src: 'http://origincache-prn.fbcdn.net/10326473_1422086174722637_2121230157_n.jpg'
      },
    ];

    

  };

  Main.prototype.openModal = function openModal(slideIndex) {
    var self = this;

    var meta = {
      slides: self.slides,
      slideIndex: slideIndex
    }

    var modalInstance = $modal.open({
      templateUrl: 'templates/modal.html',
      controller: 'ModalCtrl',
      size: 'lg',
      resolve: {
        meta: function () {
          return meta
        }
      }
    });
  };

  $scope.main = new Main();
  
});
