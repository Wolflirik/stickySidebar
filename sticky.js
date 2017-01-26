function sticky(element,footer){
    var tempScTop, currScTop = 0;
    $(window).on('scroll', function(){
        var boxH = $(element).height(),
            windowH = $(window).height(),
            footerH = $(footer).height(),
            docH = $('body').height(),
            scrolled = $(window).scrollTop(),
            scWH = scrolled - 5 + windowH,
            footerUn = docH - footerH,
            box = $(element);
        tempScTop = $(window).scrollTop();
        if(tempScTop < currScTop){
            if(scrolled <= box.offset().top){
                box.css({'top':scrolled});
            }
            currScTop = tempScTop;
        }else if(tempScTop > currScTop){
            if(scWH > box.offset().top+boxH && scWH <= footerUn){
                box.css({'top':scrolled-boxH+windowH});
            }
            currScTop = tempScTop;
        }
    });
}