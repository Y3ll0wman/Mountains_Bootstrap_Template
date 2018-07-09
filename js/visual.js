function clickFunction() {
    $(document).ready(function() {
        $('.descr').hide();
        $('h2').click(function() {
            var $answer = $(this).next('.descr');
            if ($answer.is(':hidden')) {
                $answer.slideDown();
                $(this).addClass('close');
            } else {
                $answer.slideUp();
                $(this).removeClass('close');
            }
        }); // окончание click
    }); // окончание ready
}



function openMenu() {

    "use strict";

    var toggles = document.querySelectorAll(".burger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");

        });
    }

}


function openScreenMenu() {
    $(function() {

        $('.burger').on('click', function() {
            $('body').css('overflow', 'hidden');
            $('.screen_menu').slideToggle(300, function() {
                if ($(this).css('display') === "none") {
                    $(this).removeAttr('style');
                    $('body').css('overflow', 'auto');
                }
            });

        });

    });

}
/* $(window).scroll(function() {

    if ($(this).scrollTop() > 25){
        $('.header').addClass("sticky") ;
        $('.row').addClass("transformation") ;
        $(".logotype").attr("src","images/logo-mini.png");

    }
    else{
        $('.header').removeClass("sticky");
        $('.row').removeClass("transformation");
        $(".logotype").attr("src","images/Logo.png");


    }
});

*/