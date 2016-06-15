$(document).ready(function(){
  //Get the action
  $('form').on('submit', function(e){
    e.preventDefault();
    console.log('default prevented on: ');
    console.log($(this));
  });
});
