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