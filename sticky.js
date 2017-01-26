function sticky(element,footer){
    $(window).on('scroll', function(){
        var boxH = $(element).height(),
            windowH = $(window).height(),
            footerH = $(footer).height(),
            docH = $('body').height(),
            scrolled = $(window).scrollTop(),
            scWH = scrolled + windowH + 5,
            footerUn = docH - footerH,
            box = $(element);
        tempScTop = $(window).scrollTop();
        if(tempScTop < currScTop){
            if(scrolled <= box.offset().top-20){
                box.css({'top':scrolled});
            }
            currScTop = tempScTop;
        }else if(tempScTop > currScTop){
            if(scWH > box.offset().top+boxH+20 && scWH <= footerUn){
                box.css({'top':scrolled-boxH+windowH-40});
            }
            currScTop = tempScTop;
        }
    });
}