$(document).ready(function(){
    $(window).scroll(function(){
        // function to make boarder appear
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".logocontent").removeClass("editred");

        }else{
        	$('.navbar').removeClass("sticky");
            $('.logocontent').addClass("editred");

        }


    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Social Media","Development", "Design"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

     var typed = new Typed(".typing-2", {
        strings: ["Social Media","Development", "Design"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
