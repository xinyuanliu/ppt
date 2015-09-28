var animations = ['linear','swing','jswing','easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic',
                'easeOutCubic','easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart',
                'easeInQuint','easeOutQuint','easeInOutQuint','easeInSine','easeOutSine',
                'easeInOutSine','easeInExpo','easeOutExpo','easeInOutExpo','easeInCirc',
                'easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic',
                'easeInBack','easeOutBack','easeInOutBack','easeInBounce','easeOutBounce','easeInOutBounce'];

var Index = 0,
    parts = $('.part'),
    pages = $('.page');

parts.on('hover', function(){
    // 显示预览
});

parts.on('click', function(){
    var index = $(this).index();
    console.log(index)
    parts.removeClass('on');
    $(this).addClass('on');

    $('body').animate({scrollTop: pages.eq(index).offset().top}, 1000, 'easeOutQuart');
    Index = index;
});

$(document).on('scroll', function(e){
    //console.log(e)                
});

$(document).on('keydown', function(e){
    console.log(e)
    // 按向上，上一页
    if(e.keyCode == 38){
        console.log(Index)
        Index > 0 && showPage(--Index);
    }

    // 按向下，下一页
    if(e.keyCode == 40){
        console.log(Index)
        Index < pages.length-1 && showPage(++Index);
    }

    // 按T返回顶部
    if(e.keyCode == 84){
        $('body').animate({scrollTop: 0}, 1000, 'easeOutQuart');
        Index = 0;
    }

    // alt+tab切换
    if(e.altKey && e.keyCode == 81){
            
    }
});

function showPage(index){
    $('body').animate({scrollTop: pages.eq(index).offset().top}, 1000, 'easeOutQuart');
    parts.removeClass('on');
    parts.eq(index).addClass('on');    
}