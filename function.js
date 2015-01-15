/**
 * js方法集
 */

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


function common(){
    
/*正确使用toggleClass*/
 a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');  
 //toggleClass allows you to easily do this using  
 a.toggleClass('blueButton'); 

/*在无序的set中查找一个元素的索引*/
$("ul > li").click(function () {  
    var index = $(this).prevAll().length;  
});

/*绑定函数到事件上*/
$('#foo').on('click', function() {  
  alert('User clicked on "foo."');  
}); 

/*添加html到元素*/
$('#lal').append('sometext');

/*创建元素时使用对象来定义属性*/
var e = $("", { href: "#", class: "a-class another-class", title: "..." });


/* 设置任何匹配一个选择器的事件处理程序*/
$("table").each(function(){
    $("td", this).live("hover", function(){
    $(this).toggleClass("hover");
    });
  });
  //Now use..
  $("table").on("td", "hover", function(){
  $(this).toggleClass("hover");
});

 /*找到被选择到的选项(option)元素*/
 $('#someElement').find('option:selected');

  /*隐藏包含特定值的元素*/
 $("p.value:contains('thetextvalue')").hide();

  /*自动的滚动到页面特定区域*/
 jQuery.fn.autoscroll = function(selector) {
   $('html,body').animate(
     {scrollTop: $(selector).offset().top},
     500
   );
 }
 //Then to scroll to the class/area you wish to get to like this:
 $('.area_name').autoscroll();

  /*检测各种浏览器*/
 Detect Safari (if( $.browser.safari)),
 Detect IE6 and over (if ($.browser.msie &amp;&amp; $.browser.version &gt; 6 )),
 Detect IE6 and below (if ($.browser.msie &amp;&amp; $.browser.version &lt;= 6 )),
 Detect FireFox 2 and above (if ($.browser.mozilla &amp;&amp; $.browser.version &gt;= '1.8' ))

 /*替换字符串中的单词*/
 var el = $('#id');
 el.html(el.html().replace(/word/ig, ''));

 /*关闭右键的菜单*/
 $(document).on('contextmenu',function(e){ return false; });

 /*定义一个定制的选择器*/
 $.expr[':'].mycustomselector = function(element, index, meta, stack){
 // element- is a DOM element
 // index - the current loop index in stack
 // meta - meta data about your selector
 // stack - stack of all elements to loop
 // Return true to include current element
 // Return false to explude current element
 };
 // Custom Selector usage:
 $('.someClasses:test').doSomething();

 /*判断一个元素是否存在*/
 if ($('#someDiv').length) {//hooray!!! it exists...
 }

/*使用jQuery判断鼠标的左右键点击*/
$("#someelement").live('click', function(e) {
    if( (!$.browser.msie &amp;&amp; e.button == 0) || ($.browser.msie &amp;&amp; e.button == 1) ) {
        alert("Left Mouse Button Clicked");
    }
    else if(e.button == 2)
        alert("Right Mouse Button Clicked");
});

/*显示或者删除输入框的缺省值*/
//This snippet will show you how to keep a default value
//in a text input field for when a user hasn't entered in
//a value to replace it
swap_val = [];
$(".swap").each(function(i){
    swap_val[i] = $(this).val();
    $(this).focusin(function(){
        if ($(this).val() == swap_val[i]) {
            $(this).val("");
        }
    }).focusout(function(){
        if ($.trim($(this).val()) == "") {
            $(this).val(swap_val[i]);
        }
    });
});

 /*指定时间后自动隐藏或者关闭元素(1.4支持）*/
//Here's how we used to do it in 1.3.2 using setTimeout
setTimeout(function() {
  $('.mydiv').hide('blind', {}, 500)
}, 5000);
//And here's how you can do it with 1.4 using the delay() feature (this is a lot like sleep)
$(".mydiv").delay(5000).hide('blind', {}, 500);

/*动态创建元素到DOM*/
var newgbin1Div = $('');
newgbin1Div.attr('id','gbin1.com').appendTo('body');


 /*限制textarea的字符数量*/
jQuery.fn.maxLength = function(max){
  this.each(function(){
    var type = this.tagName.toLowerCase();
    var inputType = this.type? this.type.toLowerCase() : null;
    if(type == "input" &amp;&amp; inputType == "text" || inputType == "password"){
      //Apply the standard maxLength
      this.maxLength = max;
    }
    else if(type == "textarea"){
      this.onkeypress = function(e){
        var ob = e || event;
        var keyCode = ob.keyCode;
        var hasSelection = document.selection? document.selection.createRange().text.length &gt; 0 : this.selectionStart != this.selectionEnd;
        return !(this.value.length &gt;= max &amp;&amp; (keyCode &gt; 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) &amp;&amp; !ob.ctrlKey &amp;&amp; !ob.altKey &amp;&amp; !hasSelection);
      };
      this.onkeyup = function(){
        if(this.value.length &gt; max){
          this.value = this.value.substring(0,max);
        }
      };
    }
  });
};
//Usage:
$('#gbin1textarea').maxLength(500);


/*测试一个元素在jQuery中是否可见*/
if($(element).is(':visible') == 'true') { //The element is Visible 
}


/*元素屏幕居中*/
jQuery.fn.center = function () {
  this.css('position','absolute');
  this.css('top', ( $(window).height() - this.height() ) / +$(window).scrollTop() + 'px');
  this.css('left', ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + 'px');return this;
}
//Use the above function as: $('#gbin1div').center();

/*使用特定名字的元素对应的值生成一个数组*/
var arrInputValues = new Array();
$("input[name='table[]']").each(function(){
     arrInputValues.push($(this).val());
});

 /*剔除元素中的HTML*/
(function($) {
    $.fn.stripHtml = function() {
        var regexp = /&lt;("[^"]*"|'[^']*'|[^'"&gt;])*&gt;/gi;
        this.each(function() {
            $(this).html(
                $(this).html().replace(regexp,"")
            );
        });
        return $(this);
    }
})(jQuery);
//usage:
$('p').stripHtml();

/*使用closest来得到父元素*/
$('#searchBox').closest('div');

/*使用firebug来记录jQuery事件*/
// Allows chainable logging
// Usage: $('#someDiv').hide().log('div hidden').addClass('someClass');
jQuery.log = jQuery.fn.log = function (msg) {
      if (console){
         console.log("%s: %o", msg, this);
      }
      return this;
};

/*点击链接强制弹出新窗口*/
jQuery('a.popup').live('click', function(){
  newwindow=window.open($(this).attr('href'),'','height=200,width=150');
  if (window.focus) {newwindow.focus()}
  return false;
});

/*点击链接强制打开新标签页*/
jQuery('a.newTab').live('click', function(){
  newwindow=window.open($(this).href);
  jQuery(this).target = "_blank";
  return false;
});


/*使用siblings()来处理同类元素*/
// Rather than doing this
$('#nav li').click(function(){
    $('#nav li').removeClass('active');
    $(this).addClass('active');
});
// Do this instead
$('#nav li').click(function(){
    $(this).addClass('active')
        .siblings().removeClass('active');
});


/*选择或者不选页面上全部复选框*/
var tog = false; // or true if they are checked on load
$('a').click(function() {
    $("input[type=checkbox]").attr("checked",!tog);
    tog = !tog;
});

/*取得鼠标的X和Y坐标*/
$(document).mousemove(function(e){
$(document).ready(function() {
$().mousemove(function(e){
$('#XY').html("Gbin1 X Axis : " + e.pageX + " | Gbin1 Y Axis " + e.pageY);
});
});

/*使得整个列表元素(LI)可点击*/
$("ul li").click(function(){
  window.location=$(this).find("a").attr("href"); return false;
});

/*使用jQuery来解析XML*/
function parseXml(xml) {
  //find every Tutorial and print the author
  $(xml).find("Tutorial").each(function()
  {
  $("#output").append($(this).attr("author") + "");
  });
}

/*判断一个图片是否加载完全*/
$('#theGBin1Image').attr('src', 'image.jpg').load(function() {
alert('This Image Has Been Loaded');
});

/*判断cookie是否激活或者关闭*/
var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if(!cookiesEnabled)
{
  //cookies have not been enabled
}

/*强制过期cookie*/
var date = new Date();
date.setTime(date.getTime() + (x * 60 * 1000));
$.cookie('example', 'foo', { expires: date });

/*使用一个可点击的链接替换页面中所有URL*/
$.fn.replaceUrl = function() {
        var regexp = /((ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&amp;%@!-/]))?)/gi;
        this.each(function() {
            $(this).html(
                $(this).html().replace(regexp,'<A href="$1">$1</A>')
            );
        });
        return $(this);
    }
//usage
$('#GBin1div').replaceUrl(); 

/*在表单中禁用“回车键”
大家可能在表单的操作中需要防止用户意外的提交表单，那么下面这段代码肯定非常有帮助：*/
$("#form").keypress(function(e) {
  if (e.which == 13) {
    return false;
  }
});


/*清除所有的表单数据
可能针对不同的表单形式，你需要调用不同类型的清楚方法，不过使用下面这个现成方法，绝对能让你省不少功夫。*/
function clearForm(form) {
  // iterate over all of the inputs for the form
  // element that was passed in
  $(':input', form).each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    // it's ok to reset the value attr of text inputs,
    // password inputs, and textareas
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = "";
    // checkboxes and radios need to have their checked state cleared
    // but should *not* have their 'value' changed
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    // select elements need to have their 'selectedIndex' property set to -1
    // (this works for both single and multiple select elements)
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};


 /*将表单中的按钮禁用*/
/*禁用按钮：*/
$("#somebutton").attr("disabled", true);
/*启动按钮：*/
$("#submit-button").removeAttr("disabled");


/*输入内容后启用递交按钮
这个代码和上面类似，都属于帮助用户控制表单递交按钮。使用这段代码后，递交按钮只有在用户输入指定内容后才可以启动。*/
$('#username').keyup(function() {
    $('#submit').attr('disabled', !$('#username').val()); 
});


/*禁止多次递交表单
多次递交表单对于web应用来说是个比较头疼的问题，下面的代码能够很好的帮助你解决这个问题：*/
$(document).ready(function() {
  $('form').submit(function() {
    if(typeof jQuery.data(this, "disabledOnSubmit") == 'undefined') {
      jQuery.data(this, "disabledOnSubmit", { submited: true });
      $('input[type=submit], input[type=button]', this).each(function() {
        $(this).attr("disabled", "disabled");
      });
      return true;
    }
    else
    {
      return false;
    }
  });
});


/*高亮显示目前聚焦的输入框标示
有时候你需要提示用户目前操作的输入框，你可以使用下面代码高亮显示标示：*/
$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});

/*动态方式添加表单元素
这个方法可以帮助你动态的添加表单中的元素，比如，input等：*/
//change event on password1 field to prompt new input
$('#password1').change(function() {
        //dynamically create new input and insert after password1
        $("#password1").append("<input type='text' name='password2' id='password2' />");
});

/*自动将数据导入selectbox中
下面代码能够使用ajax数据自动生成选择框的内容*/
$(function(){
  $("select#ctlJob").change(function(){
    $.getJSON("/select.php",{id: $(this).val(), ajax: 'true'}, function(j){
      var options = '';
      for (var i = 0; i < j.length; i++) {
        options += '<option value="' + j[i].optionValue + '">' + j[i].optionDisplay + '</option>';
      }
      $("select#ctlPerson").html(options);
    })
  })
})

/*判断一个复选框是否被选中
代码很简单，如下：*/
$('#checkBox').attr('checked');

/*使用代码来递交表单
代码很简单，如下：*/
$("#myform").submit();

// 创建一个嵌套的过滤器
.filter(":not(:has(.selected))"); //去掉所有不包含class为.selected的元素

// 使用jQuery切换样式
//Look for the media-type you wish to switch then set the href to your new style sheet  
$('link[media='screen']').attr('href', 'Alternative.css');  


}

/*导航跟随动画*/
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