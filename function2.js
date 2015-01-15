
// hncc

/**hover功能
 * [lazyhover description]
 * @param  {[type]} fuc_on  [description]
 * @param  {[type]} fuc_out [description]
 * @param  {[type]} de_on   [description]
 * @param  {[type]} de_out  [description]
 * @return {[type]}         [description]
 */

$.fn.lazyhover = function (fuc_on, fuc_out, de_on, de_out) {
    var self = $(this);
    var flag = 1;
    var h;
    var handle = function (elm) {
        clearTimeout(h);
        if (!flag) self.removeData('timer');
        return flag ? fuc_on.apply(elm) : fuc_out.apply(elm);
    };
    var time_on = de_on || 0;
    var time_out = de_out || 200;
    var timer = function (elm) {
        h && clearTimeout(h);
        h = setTimeout(function () {
            handle(elm);
        }, flag ? time_on : time_out);
        self.data('timer', h);
    }
    self.hover(
        function () {
            $(this).find(".sidedown").show();
            flag = 1;
            timer(this);

        },
        function () {
            $(this).find(".sidedown").hide();
            flag = 0;
            timer(this);

        }
    );
}

/**
 * common function
 */
 function imgafcute(){
     run=0;
     var timer=setInterval("run=allImagesLoaded",100);
     if(run==1){
         clearTimeout(timer);
         /*执行的程序*/
     }
 }

 /*判断图片是否已加载完成*/
 function allImagesLoaded() {
         var imagesloaded = 1;
         var images = document.images;
         for (var i = 0; i < images.length; i++) {
             if (images[i].complete == false) {
                 imagesloaded = 0;
             }
         }
         return imagesloaded;
 }



/*导航跟随动画*/

/*方法1*/
function nav() {
        var $liCur = $(".nav-box ul li.cur"),
            curP = $liCur.position().left,
            curW = $liCur.outerWidth(true),
            $slider = $(".nav-line"),
            $targetEle = $(".nav-box ul li:not('.last') a"),
            $navBox = $(".nav-box");
        $slider.stop(true, true).animate({"left": curP, "width": curW});
        $targetEle.mouseenter(function () {
            var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
            $slider.stop(true, true).animate({"left": posL, "width": _width}, "fast");
        });
        alert(curW);
        $navBox.mouseleave(function (cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({"left": cur, "width": wid}, "fast");
        });
    };


/*方法2*/
$(function(){

(function(){
var $navcur = $(".nav-current");  //下划线元素
var $nav = $("#nav");
var current = ".current";
var itemW = $nav.find(current).innerWidth();    //默认当前位置宽度
var defLeftW = $nav.find(current).position().left;  //默认当前位置Left值
    if(defLeftW!=0){
        $navcur.css({left:defLeftW});
    }
//添加默认下划线
$navcur.width(itemW);

//hover事件
$nav.find("a").hover(function(){
    var index = $(this).index();    //获取滑过元素索引值
    var leftW = $(this).position().left;    //获取滑过元素Left值
    var currentW = $nav.find("a").eq(index).innerWidth();   //获取滑过元素Width值
    $navcur.stop().animate({
        left: leftW,
        width: currentW
    },300);
    
},function(){
    $navcur.stop().animate({
        left: defLeftW,
        width: itemW
    },300)
})
})();

});