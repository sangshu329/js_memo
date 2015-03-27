
/* add easeInQuart 效果*/
$.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});




/* 第一个 插件化效果*/
$(function(){
    $("#navbar").nav();
})

;(function ($) {
    $.fn.nav=function(options){

        var opts= $.extend({
            liCur:"#navbar ul li.active",
            nav_line:".nav-line",
            navBox:"#navbar"
        },options);

        var $liCur = $(opts.liCur),
            curP = $liCur.position().left,
            curW = $liCur.outerWidth(true),
            $slider = $(opts.nav_line),
            $targetEle = $("#navbar ul li a"),
            $navBox = $(opts.navBox);
        $slider.stop(true, true).animate({"left": curP, "width": curW});
        $targetEle.mouseenter(function () {
            var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
            $slider.stop(true, true).animate({"left": posL, "width": _width}, "normal");
        });
        $navBox.mouseleave(function (cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({"left": cur, "width": wid}, "normal");
        });

    };

})(jQuery);