$('document').ready(function () {
    var a_idx = 0
    jQuery(document).ready(function ($) {
        $('body').click(function (e) {
            var a = new Array(
                '愿你三冬暖', '愿你春不寒', '愿你天黑有灯', '下雨有伞', '愿你路上有良人相伴', '愿你所有快乐无需假装',
                '愿你此生尽兴、赤诚善良', '愿时光能缓', '愿故人不散', '愿有人陪你颠沛流离', '愿你惦念的人能和你道早安', '愿你独闯的日子里不觉得孤单',
                '美人若兮', '顾盼流离', '红尘不往', '深乡自居', '结草为伴', '撷红彩妆', '枝柯蓬蓬', '绕指丛生', '人',
                '曼妙馨香', '水灵芬芳', '一帧绿意', '怡然清新', '二丝柔鬓', '低垂素衣', '三生石上', '此岸花开'
        )
            var $i = $('<span />').text(a[a_idx])
            a_idx = (a_idx + 1) % a.length
            var x = e.pageX,
                y = e.pageY
            $i.css({
                'z-index': 999,
                top: y - 20,
                left: x,
                position: 'absolute',
                'font-weight': 'bold',
                color: '#d92412',
                'font-size': '20px'
            })
            $('body').append($i)
            $i.animate(
                {
                    top: y - 180,
                    opacity: 0
                },
                1500,
                function () {
                    $i.remove()
                }
            )
        })
    })
})

var os = (function () {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isTablet =
            /(?:iPad|PlayBook)/.test(ua) ||
            (isAndroid && !/(?:Mobile)/.test(ua)) ||
            (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian
    return {
        isPc: isPc
    }
})()

if (!os.isPc) {
    $('#updown').hide()
    var setTime = setInterval(function () {
        if ($('#live2d-widget').length) {
            $('#live2d-widget').hide()
            clearInterval(setTime)
        }
    }, 200)
}
