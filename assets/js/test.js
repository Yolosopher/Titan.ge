function btnAnimationWhole(animSpeed) {
    if (!$(".single-p-main")[0]) {
        $(".top-prod-add-btn").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("added");

            if ($(this).hasClass("added")) {
                $(this).animate(
                    {
                        width: "62px",
                    },
                    animSpeed,
                    "linear",
                    function () {
                        setTimeout(() => {
                            $(this).find("div").text("დამატებულია");
                            $(this).animate(
                                {
                                    width: "100%",
                                },
                                animSpeed
                            );
                        }, 2 * animSpeed);
                    }
                );

                let svgFirst = $(this).find("svg:first-child");

                svgFirst
                    .addClass("rotate")
                    .delay(2 * animSpeed)
                    .queue(function (next) {
                        svgFirst.removeClass("rotate");
                        svgFirst.addClass("hidden");
                        svgFirst.next().removeClass("hidden").animate(
                            {
                                right: "0",
                            },
                            animSpeed,
                            "linear"
                        );
                        next();
                    });
            } else {
                $(this).animate(
                    {
                        width: "62px",
                    },
                    animSpeed,
                    "linear",
                    function () {
                        setTimeout(() => {
                            $(this).find("div").text("დამატება");
                            $(this).animate(
                                {
                                    width: "100%",
                                },
                                animSpeed
                            );
                        }, 2 * animSpeed);
                    }
                );

                let svgFirst = $(this).find("svg:nth-child(2)");

                svgFirst
                    .addClass("rotate")
                    .delay(2 * animSpeed)
                    .queue(function (next) {
                        svgFirst.toggleClass("rotate");
                        svgFirst.toggleClass("hidden");
                        svgFirst
                            .prev()
                            .toggleClass("hidden")
                            .animate(
                                {
                                    right: "0",
                                },
                                2 * animSpeed,
                                "linear"
                            );
                        next();
                    });
            }
        });
    } else {
        if (window.innerWidth > 1000) {
            $(".top-prod-add-btn").click(function (e) {
                e.preventDefault();
                $(this).toggleClass("added");
                if ($(this).hasClass("added")) {
                    $(this).animate(
                        {
                            width: "62px",
                        },
                        animSpeed,
                        "linear",
                        function () {
                            setTimeout(() => {
                                $(this).find("div").text("დამატებულია");
                                let calc50percent =
                                    Number($(this).parent().width()) / 2;
                                console.log(
                                    Number($(this).parent().width()) - 10
                                );
                                $(this).animate(
                                    {
                                        width: `100%`,
                                    },
                                    animSpeed
                                );
                            }, 2 * animSpeed);
                        }
                    );

                    let svgFirst = $(this).find("svg:first-child");

                    svgFirst
                        .addClass("rotate")
                        .delay(2 * animSpeed)
                        .queue(function (next) {
                            svgFirst.removeClass("rotate");
                            svgFirst.addClass("hidden");
                            svgFirst.next().removeClass("hidden").animate(
                                {
                                    right: "0",
                                },
                                animSpeed,
                                "linear"
                            );
                            next();
                        });
                } else {
                    $(this).animate(
                        {
                            width: "62px",
                        },
                        animSpeed,
                        "linear",
                        function () {
                            setTimeout(() => {
                                $(this).find("div").text("კალათაში დამატება");
                                let calc50percent =
                                    Number($(this).parent().width()) / 2;
                                $(this).animate(
                                    {
                                        width: `${calc50percent - 10}px`,
                                    },
                                    animSpeed
                                );
                            }, 2 * animSpeed);
                        }
                    );

                    let svgFirst = $(this).find("svg:nth-child(2)");

                    svgFirst
                        .addClass("rotate")
                        .delay(2 * animSpeed)
                        .queue(function (next) {
                            svgFirst.toggleClass("rotate");
                            svgFirst.toggleClass("hidden");
                            svgFirst
                                .prev()
                                .toggleClass("hidden")
                                .animate(
                                    {
                                        right: "0",
                                    },
                                    2 * animSpeed,
                                    "linear"
                                );
                            next();
                        });
                }
            });
        } else {
            $(".top-prod-add-btn").click(function (e) {
                e.preventDefault();
                $(this).toggleClass("added");
                if ($(this).hasClass("added")) {
                    $(this).animate(
                        {
                            width: "62px",
                        },
                        animSpeed,
                        "linear",
                        function () {
                            setTimeout(() => {
                                $(this).find("div").text("დამატებულია");
                                let calc50percent =
                                    Number($(this).parent().width()) / 2;
                                console.log(
                                    Number($(this).parent().width()) - 10
                                );
                                $(this).animate(
                                    {
                                        width: `${calc50percent - 10}px`,
                                    },
                                    animSpeed
                                );
                            }, 2 * animSpeed);
                        }
                    );

                    let svgFirst = $(this).find("svg:first-child");

                    svgFirst
                        .addClass("rotate")
                        .delay(2 * animSpeed)
                        .queue(function (next) {
                            svgFirst.removeClass("rotate");
                            svgFirst.addClass("hidden");
                            svgFirst.next().removeClass("hidden").animate(
                                {
                                    right: "0",
                                },
                                animSpeed,
                                "linear"
                            );
                            next();
                        });
                } else {
                    $(this).animate(
                        {
                            width: "62px",
                        },
                        animSpeed,
                        "linear",
                        function () {
                            setTimeout(() => {
                                $(this).find("div").text("დამატება");
                                let calc50percent =
                                    Number($(this).parent().width()) / 2;
                                $(this).animate(
                                    {
                                        width: `${calc50percent - 10}px`,
                                    },
                                    animSpeed
                                );
                            }, 2 * animSpeed);
                        }
                    );

                    let svgFirst = $(this).find("svg:nth-child(2)");

                    svgFirst
                        .addClass("rotate")
                        .delay(2 * animSpeed)
                        .queue(function (next) {
                            svgFirst.toggleClass("rotate");
                            svgFirst.toggleClass("hidden");
                            svgFirst
                                .prev()
                                .toggleClass("hidden")
                                .animate(
                                    {
                                        right: "0",
                                    },
                                    2 * animSpeed,
                                    "linear"
                                );
                            next();
                        });
                }
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    btnAnimationWhole(400);
});
