(function (window, $, undefined) {
    'use strict';
    var _dw3c = window.dw3c = function () { };

    _dw3c.fn=_dw3c.prototype= {
        constructor: dw3c,
        extend: function() {
            
        }
    };

    /**
     * 
     */
    _dw3c.scrollPageTop = (function () {
        return function ($elem) {
            var upperLimit = 100;
            var scrollElem = $elem;
            var scrollSpeed = 500;
            scrollElem.hide();
            $(window).scroll(function () {
                var scrollTop = $(document).scrollTop();
                if (scrollTop > upperLimit) {
                    $(scrollElem).stop().fadeTo(300, 1); // fade back in           
                } else {
                    $(scrollElem).stop().fadeTo(300, 0); // fade out
                }
            });
            $(scrollElem).click(function () {
                $('html, body').animate({ scrollTop: 0 }, scrollSpeed); return false;
            });
            return _dw3c;
        };
    })();
    function isArray(obj) {
        if (!obj) {
            return false;
        }
        if (!Array.isArray) {
            return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object Array]";
        } else {
            return Array.isArray(obj);
        }
    };

    function _getImg(item) {
        if (!item) {
            return null;
        }
        var src = item;
        if (typeof item === "object" && item.src) {
            src = item.src;
        }
        var img = new Image();
        img.src = src;
        if (item.width) {
            img.width = item.width;
        }
        if (item.height) {
            img.height = item.height;
        }
        console.log(src);
        return img;
    };

    /**
     * 
     */
    _dw3c.imgPrevLoad = (function() {
        return function (arrSrc,callBackAfterAll) {
            if (!arrSrc || !arrSrc.length) {
                throw TypeError("load images should be not null.");
            }
            var self = this;
            var isComplete = true,
                item,
                img,
                arrCompImgs = [],
                callBackPerImg;
            setTimeout(function _asynImg() {
                if (isComplete) {
                    item = arrSrc.shift();
                    if (item.callback) {
                        callBackPerImg = item.callback;
                    }
                    img = _getImg(item);
                    item['img'] = img;
                }
                if (!!img && img.complete) {
                    arrCompImgs.push(item);
                    if (callBackPerImg) {
                        callBackPerImg.call(self,img);
                    }
                    isComplete = true;
                    if (!!arrSrc.length) {
                        setTimeout(_asynImg, 50);
                    } else {
                        if (callBackAfterAll) {
                            callBackAfterAll.call(self, arrCompImgs);
                        }
                    }
                } else {
                    isComplete = false;
                    setTimeout(_asynImg, 50);
                }
            }, 50);
            return _dw3c;
        };
    })();
    /**
     * 预加载方法，可以加载JS,CSS,IMG用以缓存。
     */
    _dw3c.compentPrevLoad = (function() {
        return function() {
            if (arguments.length <= 0) {
                throw TypeError("load resource can not be null.");
            }
            var callback = arguments[1] ? arguments[1] : null;
            var source = [];
            if (typeof arguments[0] === "string") {
                source.push(arguments[0]);
                this.imgPrevLoad(source, callback);
            }
            if (!isArray(arguments[0])) {
                if (!arguments[0].src) {
                    throw TypeError("load resource should be pass src paramater.");
                }
                this.imgPrevLoad([arguments[0]], callback);
            } else {
                this.imgPrevLoad(arguments[0], callback);
            }
        }
    })();

    _dw3c.animBackImg = (function () {
        var defArg = {
                source: [
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skin037/images/body_bg.jpg?id=201503261330",
                        bgColor: "#f5e9d3"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip334/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#003442"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip805/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#5e7aa1"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skin055/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#1f160e"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip072/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#e2e7e2"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip311/images/body_bg.jpg?id=1414052751924",
                        bgColor: "#A6CBE1"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip409/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#feca97"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvipf005/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#235a6f"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip801/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#90cdef"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip803/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#663c28"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip417/images/body_bg.jpg?id=1410943047113",
                        bgColor: "##f1ceb5"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip405/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#01081a"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip408/images/body_bg.jpg?id=201504011050",
                        bgColor: "#d5d6ce"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip325/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#faeed8"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip310/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#e4e1e8"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip243/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#d4caa6"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip303/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#F0E6B4"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip199/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#c1c9c5"
                    },
                    {
                        Img: "http://img.t.sinajs.cn/t6/skin/skinvip022/images/body_bg.jpg?id=1410943047113",
                        bgColor: "#ccb688"
                    }
                ]
            },
            dur = 15000;
       
        return function () {
            if (arguments.length < 2) {
                return _dw3c;
            }
            if (!(isArray(arguments[0]) && arguments[1] != null && (arguments[1] instanceof $))) {
                return _dw3c;
            }
            var $elem = arguments[1],
                src = arguments[0];
            dur = arguments[2] ? arguments[2] : dur;
            if (src.length === 0) {
                src = defArg.source;
            }
            
            $elem.css("transition", "all 4s ease-in-out");

            var disGroup = [];

            function randomSrc() {
                var len = disGroup.length;
                if (len === 0) {
                    for (var i = 0; i < src.length; i++) {
                        disGroup.push(src[i]);
                    }
                    len = disGroup.length;
                }
                if (len === 1) {
                    var item = disGroup.pop();
                    return item;
                }

                var gIndex = Math.floor(Math.random(len - 1) * (len - 1));
                return (disGroup.splice(gIndex,1))[0];
            }

            function changeImg() {
                var item = randomSrc();
                $elem.css({ "background-image": "url(" + item.src + ")", "background-color": item.bgColor, "background-position": "center" });
                setTimeout(function() {
                    $elem.css({ "background-position": "top" });
                },6000);
                setTimeout(changeImg, dur);
            }
            changeImg();
            return _dw3c;
        };
    })();
})(window, jQuery);