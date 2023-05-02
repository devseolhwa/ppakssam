// FAQ
$(document).on("click", ".faqTitle button", function () {
    $(this).parent().parent().hasClass("open") ? $(this).attr("title", "질문 답변 열기") : $(this).attr("title", "질문 답변 닫기");
    $(this).parent().parent().toggleClass("open").children(".faqText").stop().slideToggle();
    return false;
});