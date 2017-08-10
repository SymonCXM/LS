/**
 * Created by Administrator on 2017/7/11.
 */
$(window).scroll(()=>{
    var $scroll=$(".scroll");
    var $offsetTop=null;
    var d=null;
    var aniName=null;
    var $scrollTop=$(document).scrollTop();
    for(var i=0;i<$scroll.length;i++) {
        $offsetTop=$scroll.eq(i).offset().top;
        d=$scrollTop+innerHeight;

        aniName=$scroll.eq(i).data("animation");
        if(d>$offsetTop) {
            $scroll.eq(i).removeClass("opacity").addClass("animate").addClass(aniName);

        }

    }
})