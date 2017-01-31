$( document ).ready(function() {
      starWarsTitles();

function starWarsTitles(){
    var starWarsScrollHeight = $('.hereIsWhereTheFunIs').height();
    var scrollTextContainer = $('.starWarsContainerText');

    scrollTextContainer.css('top', starWarsScrollHeight);
    
    
    $('.starWarsTitle').show();
    
    setTimeout(function () {
        $('.starWarsScroll').css('min-height', starWarsScrollHeight);
        $('.starWarsScrollContainer').show();
        $('.hereIsWhereTheFunIs').css('justify-content', 'flex-start');
        
        scrollTextContainer.animate({
            "top": '-' + starWarsScrollHeight -100
        },50000, "linear", function(){
            $('.starWarsScroll').css('min-height','0')
        });
        
    },8000);
     
}

});