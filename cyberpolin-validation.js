$(document).ready(function(){
  //Get the action
  $('form').on('submit', function(e){
    e.preventDefault();
    // Getting every item in the form
    // TODO: catch more than one form
    var input = ($(this).find('input[type=text]'));
    for (var i = 0; i < input.length; i++){
      if ($(input[i]).val().trim() == ''){
        $(input[i]).attr('style', 'border:1px solid red');
      } else {
        $(input[i]).attr('style', 'border:1px solid green');
      }
      $(input[i]).val();
    }
  });
});
