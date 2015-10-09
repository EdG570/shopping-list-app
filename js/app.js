$(document).ready(function(){

//User enters and submits an item which adds an li element to their list 
  
  $('form').submit(function(event){
    event.preventDefault();
       var itemAdded = $('input[name="add"]').val();
      $('.shopping-list').append('<li><button class="complete-btn"><img class="check-mark" src="images/check.svg"/></button><div class="list-item"><p>' + itemAdded + '</p></div><button class="remove-btn">X</button></li>');
  });

//Allows users to check and uncheck complete button in their list

  $('.shopping-list').on('click', '.complete-btn', function(){
    
    var line = $(this).siblings('.list-item').children('p').css('text-decoration', 'line-through');
    var noLine = $(this).siblings('.list-item').children('p').css('text-decoration', 'none');

    $(this).find('.check-mark').toggle();
    
    line;
    
  });

//Removes list items when clicked

  $('.shopping-list').on('click', '.remove-btn', function(){
      $(this).closest('li').remove();
  });

//Entire list is cleared

  $('.shopping-list').on('click', '#reset-btn', function(){
      $(this).find('li').remove();
  });

});

