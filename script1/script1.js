$(document).ready(function(){
  var items = $('.image_thumb');
  var i = 0;


//  $('.statReviews').text(Math.round(Math.random() * (200 - 100) + 100) + ' Ulasan');


  $('.change-block-reviews').on('click', function(){
      $('.shape1').css('background-color', "#ffc80a");
      $('.shape2').css('background-color', "#dee2ed");
      $('.Reviews').show();
      $('.Details').hide();
  });

  $('.change-block-details').on('click', function(){
      $('.shape1').css('background-color', "#dee2ed");
      $('.shape2').css('background-color', "#ffc80a");
      $('.Reviews').hide();
      $('.Details').show();
  });

  $('.image-slider').on('click', function(e){
      event = e.target;
      if($(event).hasClass('image_thumb')){
            $('.image_thumb').removeClass('active');
            $(event).addClass('active');
            for(var n = 0; n < items.length; n++){
              if($(items[n]).hasClass('active')){
                  i = n;
              };
            };
            var newSrc = $(event).attr("src");
            $('.main-photo').attr("src", newSrc);
      };
  });

  $('.minus').on('click', function(){
    var newVal = +$('.count').text();
    if(newVal == 1){
        return;
    };
    var newVal = newVal - 1;
    $('.count').text(newVal);
  });

  $('.plus').on('click', function(){
    var newVal = +$('.count').text();
    var newVal = newVal + 1;
    $('.count').text(newVal);
  });

  $('.right-arrow').on('click', function(){
    $(items[i]).removeClass('active');
    if(i == items.length - 1){
      i = 0;
      $(items[i]).addClass('active');
      var newSrc = $(items[i]).attr("src");
      $('.main-photo').attr("src", newSrc);
    }
    else{
      i++;
      $(items[i]).addClass('active');
      var newSrc = $(items[i]).attr("src");
      $('.main-photo').attr("src", newSrc);
    };
  });

  $('.left-arrow').on('click', function(){
    $(items[i]).removeClass('active');
    if(i == 0){
      i = items.length - 1;
      $(items[i]).addClass('active');
      var newSrc = $(items[i]).attr("src");
      $('.main-photo').attr("src", newSrc); 
    }
    else{
      i--;
      $(items[i]).addClass('active');
      var newSrc = $(items[i]).attr("src");
      $('.main-photo').attr("src", newSrc); 
    };
  });

  $('.button').on('click', function(){
    $('.all').addClass('opac');
    $('.form').show();
  });

  $('.cross').on('click', function(){
    $('.all').removeClass('opac');
    $('.form').hide();
  });

});
