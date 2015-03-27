
  function isInEffect (effect) {
    return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
  };

  function isOutEffect (effect) {
    return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
  };


  function stringToBoolean(str) {
    if (str !== "true" && str !== "false") return str;
    return (str === "true");
  };

  // custom get data api method
  function getData (node) {
    var attrs = node.attributes || []
      , data = {};

    if (!attrs.length) return data;

    $.each(attrs, function (i, attr) {
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
      if (/^data-in-*/.test(nodeName)) {
        data.in = data.in || {};
        data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-out-*/.test(nodeName)) {
        data.out = data.out || {};
        data.out[nodeName.replace(/data-out-/, '')] =stringToBoolean(attr.nodeValue);
      } else if (/^data-*/.test(nodeName)) {
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
      }
    })

    return data;
  }

  function shuffle (o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }

  function animate ($t, effect, cb) {
    $t.addClass('animated ' + effect)
      .css('visibility', 'visible')
      .show();

    $t.one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $t.removeClass('animated ' + effect);
        cb && cb();
    });
  }

  function animateTokens ($tokens, options, cb) {
    var that = this
      , count = $tokens.length;

    if (!count) {
      cb && cb();
      return;
    }

    if (options.shuffle) $tokens = shuffle($tokens);
    if (options.reverse) $tokens = $tokens.toArray().reverse();

    $.each($tokens, function (i, t) {
      var $token = $(t);

      function complete () {
        if (isInEffect(options.effect)) {
          $token.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $token.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $token.text() ?
        setTimeout(function () { animate($token, options.effect, complete) }, delay) :
        complete();
    });
  };






var timerFID;

function nextPage() {
    changeFocus(true);
}

function prePage() {
    changeFocus(false);
}

var currentFocusI = 1;
var changeingFocus = false;



function changeFocus(dir) {
    if ($("#focusBar li").length <= 1) return;
    if (changeingFocus) return;
    changeingFocus = true;

    $("#focusIndex" + nextI).stop(false, true);
    $("#focusIndex" + nextI + " .focusL").stop(false, true);
    $("#focusIndex" + nextI + " .focusR").stop(false, true);

    var nextI = dir ? currentFocusI + 1 : currentFocusI - 1;
    nextI = nextI > $("#focusBar li").length ? 1 : (nextI < 1 ? $("#focusBar li").length : nextI);
    //var focusWidth	 = $(window).width()>1000?1000:$(window).width();
    $("#focusIndex" + currentFocusI).css("width", $(document.body).outerWidth());
    // alert($(document.body).outerWidth());
    $("#focusIndex" + nextI).css("width", $(document.body).outerWidth());
    if (dir) {
        $("#focusIndex" + nextI).css("left", $(document.body).outerWidth());
        $("#focusIndex" + nextI + " .focusL").css("left", $(document.body).outerWidth() / 2);
        $("#focusIndex" + nextI + " .focusR").css("left", $(document.body).outerWidth() / 2);
        $("#focusIndex" + currentFocusI).show();
        $("#focusIndex" + nextI).show();

        $("#focusIndex" + currentFocusI + " .focusL").animate({
            left: -($(document.body).outerWidth() / 2 + 1900)
        }, 300, 'easeInExpo');
        $("#focusIndex" + currentFocusI + " .focusR").animate({
            left: -($(document.body).outerWidth() / 2 + 1900)
        }, 950, 'easeInExpo', function () {
            $("#focusIndex" + nextI + " .focusL").animate({
                left: -950
            }, 1000, 'easeInOutCirc');
            $("#focusIndex" + nextI + " .focusR").animate({
                left: -950
            }, 1200, 'easeInOutCirc');

            $("#focusIndex" + currentFocusI).animate({
                left: -$(document.body).outerWidth()
            }, 1000, 'easeOutExpo');
            $("#focusIndex" + nextI).animate({
                left: 0
            }, 1000, 'easeOutExpo', function () {
                $("#focusIndex" + currentFocusI).hide();
                currentFocusI = nextI;
                changeingFocus = false;
            });
        });
    } else {
        $("#focusIndex" + nextI).css("left", -$(document.body).outerWidth());
        $("#focusIndex" + nextI + " .focusL").css("left", -($(document.body).outerWidth() / 2 + 1900));
        $("#focusIndex" + nextI + " .focusR").css("left", -($(document.body).outerWidth() / 2 + 1900));
        $("#focusIndex" + currentFocusI).show();
        $("#focusIndex" + nextI).show();

        $("#focusIndex" + currentFocusI + " .focusR").animate({
            left: $(document.body).outerWidth() / 2
        }, 300, 'easeInExpo');
        $("#focusIndex" + currentFocusI + " .focusL").animate({
            left: $(document.body).outerWidth() / 2
        }, 950, 'easeInExpo', function () {
            $("#focusIndex" + nextI + " .focusL").animate({
                left: -950
            }, 1200, 'easeInOutCirc');
            $("#focusIndex" + nextI + " .focusR").animate({
                left: -950
            }, 1000, 'easeInOutCirc');

            $("#focusIndex" + currentFocusI).animate({
                left: $(document.body).outerWidth()
            }, 1000, 'easeOutExpo');
            $("#focusIndex" + nextI).animate({
                left: 0
            }, 1000, 'easeOutExpo', function () {
                $("#focusIndex" + currentFocusI).hide();
                currentFocusI = nextI;
                changeingFocus = false;
            });
        });
    }
}


function starFocustAm() {
    timerFID = setInterval("timer_tickF()", 6000);
}

function stopFocusAm() {
    clearInterval(timerFID);
}

function timer_tickF() {
    changeFocus(true);
}
starFocustAm();