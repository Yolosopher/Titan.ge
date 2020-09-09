const topProductsSlider = new Swiper(".top-prod-slider", {
    slidesPerView: "auto",
    direction: "horizontal",
    navigation: {
        nextEl: ".top-prod-slider-next",
        prevEl: ".top-prod-slider-prev",
    },
});

const coverSlider = new Swiper(".home-main-container", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".coverPagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".coverSlideNext",
        prevEl: ".coverSlidePrev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// burger menu
$("#header-nav").click(function () {
    if ($(".home-header").hasClass("on")) {
        setTimeout(() => {
            $(".home-header").toggleClass("on");
            $(".header-black-screen").toggleClass("on");
            $("html").toggleClass("overFlow");
            $(this).toggleClass("on");
        }, 700);
    } else {
        $(".home-header").toggleClass("on");
        $(".header-black-screen").toggleClass("on");
        $("html").toggleClass("overFlow");
        $(this).toggleClass("on");
    }

    clientWidth = window.innerWidth;
    if (clientWidth > 1000) {
        $("#burger-header").slideToggle(700, function () {
            if ($(this).is(":visible")) {
                $(this).css("display", "flex");
            }
        });
    }
});

$(".second-level-li > a").click(function () {
    if ($(this).hasClass("active")) {
        $(".second-level-li > a").removeClass("active");
    } else {
        $(".second-level-li > a").removeClass("active");
        $(this).toggleClass("active");
    }
});

$("aside .ctgr-ul li a").click(function () {
    if ($(this).hasClass("active")) {
        $(".burger-header-right").removeClass("active");
    } else {
        $(".burger-header-right").toggleClass("active");
    }

    $(this).toggleClass("active");
});

// burger menu when clientWidth < 1000
$("#burger-respo").click(function () {
    $(this).toggleClass("respo-active");
    $(".auth-toggle-black-screen").addClass("on");

    respoBurgerToggleRunner();
    $("#burger-header-clone").toggle(function () {
        $("html").toggleClass("overflown");
        if ($(this).is(":visible")) {
            $(this).animate(
                {
                    display: "flex",
                    left: 0,
                    top: "30px",
                },
                700
            );
        } else {
            clientWidth = window.innerWidth;
            $(this).animate(
                {
                    display: "flex",
                    left: `${105 - clientWidth}px`,
                    top: "30px",
                },
                700
            );
            $(".auth-toggle-black-screen").removeClass("on");
        }
    });
});

function respoBurgerToggleRunner() {
    clientWidth = window.innerWidth;
    respoBurgerToggle();
}

function respoBurgerToggle() {
    let copy = document.getElementById("burger-header").cloneNode(true);
    copy.id = "burger-header-clone";
    copy.children[0].children[1].children[1].remove();
    let bodyEl = document.querySelector("body");
    if (
        (clientWidth < 1000) &
        !bodyEl.classList.contains("has-cloned-burger")
    ) {
        bodyEl.appendChild(copy);
        $("#burger-header-clone").css({
            top: "unset",
            bottom: "105px",
            left: `${105 - clientWidth}px`,
            padding: 0,
            "padding-left": "15px",
            position: "fixed",
            width: `${clientWidth - 105}px`,
            "max-width": `${clientWidth - 105}px`,
        });
        $("#burger-header-clone")
            .find(".burger-header-bot")
            .find("ul")
            .addClass("founded");
        bodyEl.classList.add("has-cloned-burger");
    }
}

// decrement function
$(".decrement").click(function () {
    let number = $(this).next();
    number.text(number.text() - 1);
});
// increment function
$(".increment").click(function () {
    let number = $(this).prev();
    number.text(Number(number.text()) + 1);
});

// single-product-page slider
const swiper4 = new Swiper(".product-image-slider-outer", {
    spaceBetween: 20,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".sg-next",
        prevEl: ".sg-prev",
    },
});

window.addEventListener("DOMContentLoaded", (event) => {
    // single-product.html first-image active
    let firstImg = document.querySelector(".pr-i-s-img");
    if (firstImg) firstImg.classList.add("marked");
    // single-product.html onclick main photo change
    $(".pr-i-s-img").click(function () {
        $(".pr-i-s-img").removeClass("marked");
        $(this).addClass("marked");
        let src = $(this).find("img").attr("src");
        let mainChsnPhoto = $(".product-main-image");
        mainChsnPhoto.fadeOut(400, function () {
            let viewPortWidth = window.innerWidth;
            if (viewPortWidth > 580) {
                $(this).attr("src", src).fadeIn(400);
            } else {
                $(this).attr("src", src);
            }
        });
    });
});

// profile.html profile-nav-li-active
function navSwitcher() {
    $(".profile-ps-pc").removeClass("active");
    $(".historyOrder").removeClass("active");

    if ($(".personal-info-nav").hasClass("profile-nav-li-active")) {
        $(".profile-ps-pc").addClass("active");
    } else if ($(".order-history-nav").hasClass("profile-nav-li-active")) {
        $(".historyOrder").addClass("active");
    }
}

let profNavLi = $(".profile-nav-li");
$(".profile-nav-li").click(function () {
    $(".profile-nav-li").removeClass("profile-nav-li-active");
    $(this).addClass("profile-nav-li-active");
    navSwitcher();
});

// check title and chane the respo-menu color
const burgerRespo = document.getElementById("burger-respo");
const srchbarRespo = document.querySelector(".srchbar-respo");
const shopRespo = document.querySelector(".respo-shop");
const loginRespo = document.querySelector(".respo-login");
const allRespo = [burgerRespo, srchbarRespo, shopRespo, loginRespo];

function checkPage() {
    allRespo.forEach((el) => el.classList.remove("respo-active"));
    let title = document.title;
    if (title == "Home") {
        burgerRespo.classList.add("respo-active");
    } else if (title == "Profile") {
        loginRespo.classList.add("respo-active");
    } else if (title == "Card") {
        shopRespo.classList.add("respo-active");
    }
}

// auth-toggle
let clientWidth = window.innerWidth;
let clientHeight = window.innerHeight;

// on resize and on orientationchange function
function resizeNorientation() {
    let resizedWidth = window.innerWidth;
    let authTogWidth = $("#auth-toggle");
    let comparable = authTogWidth.width() + 15;
    if (resizedWidth < comparable) {
        $("#auth-toggle").css({
            "max-width": `${resizedWidth - 15}px`,
        });
    } else {
        $("#auth-toggle").css({
            "max-width": `${resizedWidth - 15}px`,
        });
    }
    controlHeight();
    respoBurgerToggle();
}

// auth-toggle height auto On orientation change and On resize
function controlHeight() {
    if (clientHeight < 550) {
        $("#auth-div.after").css({
            height: "auto",
        });
    }
}

// on resize
$(window).resize(function () {
    resizeNorientation();
    controlHeight();
});
// on orientation change
$(window).on("orientationchange", function (event) {
    resizeNorientation();
    controlHeight();
    respoBurgerToggle();
});

function authToggle(clWidth) {
    $("#auth-toggle").addClass("after");
    if (clWidth < 700) {
        $("#auth-toggle").animate(
            {
                padding: "20px 15px 20px 35px",
                "max-width": `${clWidth - 15}px`,
                width: `572px`,
            },
            700,
            "swing"
        );
    } else {
        $("#auth-toggle").animate(
            {
                padding: "20px 81px 20px 102px",
                "max-width": `${clWidth - 15}px`,
                width: "572px",
            },
            700,
            "swing"
        );
    }
    // black screen on auth-toggle click
    $(".auth-toggle-black-screen").addClass("on");
    $("html").css({
        overflow: "hidden",
    });
    controlHeight();
}
// respo.click() triggers auth-toggle
$(".login").click(function () {
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
});

$(".respo-login").click(function () {
    $(this).addClass("active");
    clientHeight = window.innerHeight;
    clientWidth = window.innerWidth;
    authToggle(clientWidth);
});

// exit auth-toggle
$("#exit-auth-toggle").click(function () {
    $(".respo-login").removeClass("active");
    $("#auth-toggle").removeClass("after");
    $("#auth-toggle").animate(
        {
            padding: "20px 0 20px 0",
            width: "0",
        },
        700,
        "swing"
    );
    setTimeout(() => {
        $(".auth-toggle-black-screen").removeClass("on");
        $("html").css({
            overflow: "unset",
        });
    }, 700);
});

// auth input controls
let authMail = $("input[type=email]");

authMail.change(function () {
    let checkPass = $(this).parent().find(".auth-succ-or-error");
    let val = $(this).val();
    let dz = val.split("@")[1];
    if (!dz) checkPass.addClass("error");
    if (val.length === 0) {
        checkPass.removeClass("error").removeClass("success");
        return;
    }
    if (/\./.test(dz) && val.length >= 8) {
        checkPass.removeClass("error").addClass("success");
    } else {
        checkPass.removeClass("success").addClass("error");
    }
});

let authPass = $("input[type=password]");

authPass.change(function () {
    let checkPass = $(this).parent().find(".auth-succ-or-error");
    let val = $(this).val();
    let w, d;
    w = /[a-zA-Z]/.test(val);
    d = /\d/.test(val);
    if (val.length === 0) {
        checkPass.removeClass("error").removeClass("success");
        return;
    }
    if (w && d && val.length >= 8) {
        checkPass.removeClass("error").addClass("success");
    } else {
        checkPass.removeClass("success").addClass("error");
    }
});

// auth & register & passReset switching
$(".register").click(function () {
    $("#back-to-auth").addClass("register-active");
    $("#auth-toggle-form").addClass("none");
    $("#passreset-form").addClass("none");
    $("#regis-toggle-form").removeClass("none");
    $(".register").addClass("register-active");
});
$("#back-to-auth").click(function () {
    $(this).removeClass("register-active");
    $("#regis-toggle-form").addClass("none");
    $("#passreset-form").addClass("none");
    $("#auth-toggle-form").removeClass("none");
    $(".register").removeClass("register-active");
});
$("#pass-reset").click(function () {
    $("#passreset-form").removeClass("sent");
    $("#back-to-auth").addClass("register-active");
    $("#passreset-form").removeClass("none");
    $("#auth-toggle-form").addClass("none");
    $("#regis-toggle-form").addClass("none");
    $(".register").addClass("register-active");
    $("#passreset-form").removeClass("sent");
});
$('input[value="პაროლის აღდგენა"]').click(function (e) {
    e.preventDefault();
    setTimeout(() => {
        $("#passreset-form").addClass("sent");
    }, 300);
});

// RespoSearch Clicked

function respoSearchClicked() {
    $(".respo-nav-inside a").addClass("srch-on");
    $(".srchbar-respo").addClass("clicked");
}

function respoSearchClickedReversed() {
    $(".respo-nav-inside a").removeClass("srch-on");
    $(".srchbar-respo").removeClass("clicked");
}

$(".searchbar-respo-form").submit(function (e) {
    e.preventDefault();
});

$(".srchbar-respo").click(function () {
    respoSearchClicked();
});

$(".turn-off-searchbar-respo").click(function () {
    setTimeout(() => {
        respoSearchClickedReversed();
    }, 0.1);
});

function onBlur() {
    if (this !== document.activeElement) {
        $(this).closest(".auth-div").find(".form-svg-div").addClass("off");
    } else {
    }
}

function focOut() {
    let svgs = $("svg:visible");
    svgs = [...svgs];
    svgs = svgs.filter((svg) => svg.closest(".auth-div"));
    svgs.forEach(element => {
        let inp = element.closest(".auth-div").querySelectorAll('input')[0];
        if (inp && inp.value == 0) {            
            element.classList.remove('on');
        }
    });
};



$(
    'input[type="password"], input[type="email"], input[type="tel"], input[type="text"]'
).focus(function () {
    let ab = $(this).closest(".auth-div").find(".form-svg-div").find("svg");
    ab.addClass("on");
});

$(
    'input[type="password"], input[type="email"], input[type="tel"], input[type="text"]'
).focusout(function () {
    focOut();
});

if (
    $(".single-p-main")[0] &&
    window.innerWidth <= 1000 &&
    !$("#product-add-btn").hasClass("added")
) {
    $("#product-add-btn").find("div").text("დამატება");
}

// button added styling

$('.new-style-btn').click(function(e){
    e.preventDefault();
    $(this).removeClass('added-constant');
    if ($(this).hasClass('added')){
        $(this).css('animation-name', 'lines');
        $(this).css('animation-name', '');
        $(this).addClass('removed');
        $(this).removeClass('added');
        setTimeout(() => {
            $(this).removeClass('removed');
        }, 2000);
    } else {
        $(this).toggleClass('added');
        $(this).removeClass('removed');
    }    
    
})


// main aside menu toggle
$(".ctgr-ul li").click(function () {
    if ($(this).hasClass("clicked")) {
        $(".ctgr-ul li").removeClass("clicked");
        $(".ctgr-ul li a").removeClass("clicked");
        $(".toggle-drop-right").removeClass("clicked");
    } else {
        $(".ctgr-ul li").removeClass("clicked");
        $(".ctgr-ul li").find("a").removeClass("clicked");
        $(this).addClass("clicked");
        $(this).find("a").addClass("clicked");
        $(".toggle-drop-right").addClass("clicked");
    }
});

$(document).on("click", function (obj) {
    if (!obj.target.closest("aside")) {
        $(".ctgr-ul li").removeClass("clicked");
        $(".ctgr-ul li a").removeClass("clicked");
        $(".toggle-drop-right").removeClass("clicked");
    }
});
if ($(".card-main")[0]) {
    // basket & delivery changing onClicks
    $(".back-to-basket-btn").click(function () {
        $(".basketNdelivery-basket").addClass("active");
        $(".basketNdelivery-delivery").removeClass("active");
        $(".basket-ul-outter").addClass("bask-deliv-active");
        $(".delivery-form-outter").removeClass("bask-deliv-active");
    });
    $(".basket-ctrl-next-btn").click(function () {
        $(".basketNdelivery-delivery").addClass("active");
        $(".basketNdelivery-basket").removeClass("active");
        $(".delivery-form-outter").addClass("bask-deliv-active");
        $(".basket-ul-outter").removeClass("bask-deliv-active");
    });

    // form styled selectMenu
    $("select").selectmenu({
        change: function (ev, data) {
            $('.region-svg').css("fill","#171717");
            let selected = data.item.label;
            let parentP = $(this).parent().find("p");
            parentP.text(selected).addClass("active-p");
        },
    });
}
