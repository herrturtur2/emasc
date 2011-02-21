// index.js
// Joshua Marshall Moore
// 2/20/2011

$(document).ready(function(){
  // switch password input field to type password
  $('#pw_real').toggle();

  $('#pw_alt').focus(function (){
    $('#pw_alt').toggle();
    $('#pw_real').toggle().focus();
  });
  
  // remove email from field so user can type
  $('#email').focus(function(){
    $(this).val('');
  });
  $('#email').change(function(){
    if($('#email').val().length==0){
      $('#email').val('Email');
    }
  });
  $('#email').blur(function(){
    if($('#email').val().length==0){
      $('#email').val('Email');
    }
  });
  
  // do the same for password
  $('#pw_real').blur(function(){
    if($('#pw_real').val().length==0){
      $('#pw_real').toggle();
      $('#pw_alt').toggle();
    }
  });
  
  // Let the user click the login button, and return to the previous page after they're done
  $('#signupin').click(function(){
    
  });
});
