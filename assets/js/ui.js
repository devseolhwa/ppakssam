/* gnb */
$(document).on("mouseenter focus", ".nav > ul > li > a", function () {
   $(this).parent("li").addClass("active").siblings("li").removeClass("active");
   return false;
}).on("mouseleave", ".nav", function () {
    $(".nav > ul > li").removeClass("active");
    return false;
}).on("click", "#btnGnbOpen", function () {
    $("#gnb").fadeIn("400").addClass("active");
    return false;
}).on("click", "#btnGnbclose", function () {
    $("#gnb").removeClass("active");
    return false;
}).on("click", ".gnbInner > ul > li > a", function () {
    $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
    $(".gnbInner > ul > li").each(function () {
        let onCheck = $(this).is(".on");
        if (onCheck) {
            $(this).children("ul").slideDown();
        } else {
            $(this).children("ul").slideUp();
        }
    });
    return false;
 });