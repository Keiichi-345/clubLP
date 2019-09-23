$(function(){
    new WOW().init();
    
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        fade:true,
    });
    
    //スムーススクロール
    $('.link').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        
        $('body,html').animate({
            'scrollTop':position - 100
        },'slow');
        
    })

    //スクロールトップ
    $('.totop').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },500);
        return false;
    })
    //QandA
    $('.Q-box').click(function(){
        var click_open = $(this).find('.open').hasClass('active');//クリックしたのがopenか？
        var $A_box = $(this).parents('.accordion-item').find('.A-box');//クリックしたアイコンのあるA-box
        
        if(click_open){
            $A_box.slideDown(300);
            $(this).find('.open').removeClass('active');
            $(this).find('.close').addClass('active');
        }else{
            $A_box.slideUp(300);
            $(this).find('.close').removeClass('active');
            $(this).find('.open').addClass('active');
        }
    })
    //tab切り替え
    $('.tab-list').click(function(){
        var index = $('.tab-list').index(this);
        $('.tab-list').removeClass('active');
        $('.tab-contents').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.tab-box').eq(index).addClass('active');
    })
    //モーダル
    $('.modal-btn').click(function(){
        $('.modal').fadeIn();
    })
    $('.modal-close').click(function(){
        $('.modal').fadeOut();
    })
    //ToTOP出現
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 200){
            $('.totop').fadeIn();
        }else{
            $('.totop').fadeOut();
        }
        
    })
    //ドロワー
    $('.drawer-open').click(function(){
        $('.drawer').fadeIn();
    });
    
    $('.drawer-close').click(function(){
        $('.drawer').fadeOut();
    });
    
    });
    
    