/**
 * Created by Administrator on 2017/7/9.
 */
+function(){
    var $d1=$("#banner-1");
    var $d2=$("#banner-2");
    var toggle=0;
    var timer=0;
    //起始画面
    $d1.addClass("f");
    $d2.addClass("n");
    //随机产生下一个数
    function next(){
        var j=parseInt(Math.random()*7+1);
        if(toggle!=j){
            toggle=j;
        }else{
            next();
        }
    }
    function f(){
        timer=setInterval(()=>{
            next();
            var $last1=$d1.attr("class");
            var aniN=`billboardItem_${toggle}_on`;
            var aniF=`billboardItem_${toggle}_off`;
            if($last1[$last1.length-1]=="n"){
                $d1.removeAttr("class").addClass("animated").addClass(aniF);
                $d2.removeAttr("class").addClass("animated").addClass(aniN);
            }else{
                $d1.removeAttr("class").addClass("animated").addClass(aniN);
                $d2.removeAttr("class").addClass("animated").addClass(aniF);
            }
        },5000)
    }
    f();
    $("#container").hover(()=>{
        clearInterval(timer);
        timer=null;
    },()=>{
        f();
    })
}()