var sampleApp = angular.module('sampler', []);


sampleApp.controller('SampleController', function SampleController($scope) {
  $scope.title = 'Sample Title Holder';

  $scope.list = [
    {
     name:  'Item 1',
     desc: 'Typically the first item in a list.'
    },
    {
        name:  'Item 2',
        desc: 'We always have a second item to prove a list is really a list of sometype!'
    },
    {
        name:  'Item 3',
        desc: 'Debateable if you need a third item to make a list a list, but here it is.'
    }

  ];
  $scope.show = function(elementId){
    console.log('Showtime baby!');
    document.getElementById(elementId).removeAttribute('hidden');
    
  }
  //Toggle Visibility of an element.
  $scope.toggle = function(elementId){
      var element = document.getElementById(elementId);
      if(element.hasAttribute('hidden'))
      {
          element.removeAttribute('hidden');
      }
      else
        element.setAttribute('hidden', true);
  }
});