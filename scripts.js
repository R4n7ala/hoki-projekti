window.onscroll = function(e){
    if(e.target.scrollingElement.scrollTop > 10) {
         $('body').addClass('nav-smaller');
             
    } else {
		$('body').removeClass('nav-smaller');
    }
};

