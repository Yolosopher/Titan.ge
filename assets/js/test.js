function goToProfileFromDesktop() {
    $('.login').attr('href', '../pages/profile.html');
    setTimeout(() => {
        $('.login').trigger('click');
    }, 0.1);
}
function goToProfileFromRespo() {
    $('.respo-login').attr('href', '../pages/profile.html');
    setTimeout(() => {
        $('.respo-login').trigger('click');
    }, 0.1);
}
// login.click()
$(".login").click(function () {
    if($('.login').hasClass('active')){
        goToProfileFromDesktop();
    } else {
        clientHeight = window.innerHeight;
        clientWidth = window.innerWidth;
        authToggle(clientWidth);
        if ($(".header-black-screen").hasClass("on")) {
            $(".home-header").toggleClass("on");
            $(".header-black-screen").toggleClass("on");
            $("html").toggleClass("overFlow");
            $(".header-nav").toggleClass("on");
            clientWidth = window.innerWidth;
            if (clientWidth > 1000) {
                $("#burger-header").slideToggle(700, function () {
                    if ($(this).is(":visible")) {
                        $(this).css("display", "flex");
                    }
                });
            }
        }
    }
});
// respo-login.click()
$(".respo-login").click(function () {
    if($('.login').hasClass('active')){
        goToProfileFromRespo();
    } else {
        $(this).addClass("active");
        clientHeight = window.innerHeight;
        clientWidth = window.innerWidth;
        authToggle(clientWidth);
    }
});