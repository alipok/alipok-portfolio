/* global app */
/*global jQuery*/
app.controller('homeCtrl', function($scope) {

 $scope.reveal = function(){
   jQuery('.info').slideToggle('slow');
 }; 


}); 