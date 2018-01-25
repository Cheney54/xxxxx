var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',

    },
    loop: true
});
$(".btn-wrapper div").click(function () {
    $(this).addClass("active").siblings().removeClass("active")

})
$(".sumbmit").click(function () {
    $("#m")
        .css("filter", "blur(2px)")
        .next()
        .show()
        .children()
        .addClass("show")
})
$(".en").click(function () {
    if($("#t").val()===""){
        $(".tips").html("请输入").addClass("a")
        return
        ren()
    }

    var val=$("#t").val();
    var data=get();
   data.push({text:val,isDone:false,isStar:false,time});
    $(this)
        .parent()
        .removeClass("show")
        .parent()
        .hide()
        .prev()
        .css("filter", "blur(0px)")
})
$(".tips").on("animationend",function () {
    
})
$(".cha").click(function () {
    $(".en")
        .parent()
        .removeClass("show")
        .parent()
        .hide()
        .prev()
        .css("filter", "blur(0px)")
})
$(".a").on("animationend",function () {
    $(this).removeClass("")
})
function get() {
    return localStorage.todo?JSON.parse(localStorage.todo):[]
}
function s(data) {
    localStorage.data=JSON.stringify(data)
}
function ren() {
    var data=get()

}
