/* 버튼 */
$(".btn>li").click(function(){
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    let i=$(this).attr('data-filter') //data-filter 속성값 호출
    $(".gallery").isotope({ filter: i })

})


/* setTimeout(코드,시간) 지정된시간 이후 한번 코드를 실행*/
setTimeout(function(){$(".gallery").isotope('layout')},100);

const grid=new Isotope(".gallery",{

    itemSelector:".box"

})


$(".fancybox").fancybox();


/* topbtn */
$(".topbtn").click(function(){
    $("html").animate({scrollTop:0},500)
})

$(".topbtn").hide();
$(window).scroll(function(){
    let scr=$("html").scrollTop();

    if (scr>100){
        $(".topbtn").fadeIn()
    }else{
        $(".topbtn").fadeOut()
    }

})