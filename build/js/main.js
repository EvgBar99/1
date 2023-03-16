

$(window).on("load", function() {
    topPosition();
    SliderInSlider();
    cust_col();
    //$('.pop-up-wrap').perfectScrollbar('update');

});


$(document).ready(function() {
    setActiveLink(".menu-item");

    setInterval(function(){
        $("input[name*='group_id']").val(localStorage.getItem('active'));
        $("input[name*='classes']").val(localStorage.getItem('classes'));
        $("input[name*='trainers']").val(localStorage.getItem('trainers'));
    }, 3000);

    var name = localStorage.getItem('user');
    var usrpic = localStorage.getItem('user_image');
    if(usrpic && typeof (usrpic)!=="undefined"){
        $('.user-img').css('background-image', 'url('+usrpic+')');
    }
    if(name !== null){

        $('#login').css('display','none');
        $('#logout').css('display','block');
        $('#user').css('display','block');
        $('.user-name').html(name);

    }else{

        $('#logout').css('display','none');
        $('#login').css('display','block');
        $('#user').css('display','none');
        $('.user-name').html('');

    }

    let lang = $('.current_lang_name').html();
    localStorage.setItem('language', lang);

    cust_col();

    setEqualHeight($(".max-height > div"));

    identifynder();

    $("#hamburger-wrap").on("click",function(event){
        event.stopPropagation();
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(".menu").removeClass("active");
            $("#hamburger-icon").removeClass("active");
            $(".opacity-block").removeClass("active");

        }else{
            $(this).addClass("active");
            $(".menu").addClass("active");
            $("#hamburger-icon").addClass("active");
            $(".opacity-block").addClass("active");

        };
    });


    $(".class-item").click(function(){
        $(".popUpInfoWrapp").addClass("active");
        let img = $(this).find(".this-img-url").text();
        let title = $(this).find(".this-title-text").text();
        let text = $(this).find(".this-text").text();
        $(".popUpContainer").find(".popUpImg img").attr('src',img);
        $(".popUpContainer").find(".services-title-wrapper h4").text(title);
        $(".popUpContainer").find(".popUpText").text(text);
        
    })


    $('.tab-item').eq(0).addClass("active")
    $(".tab-content").eq(0).addClass("active");
    $(".tab-item").on('click', function() {
        $(".tab-item").removeClass("active").eq($(this).index()).addClass("active");

        $(".tab-content").removeClass("active").eq($(this).index()).addClass("active");

    });

    SliderBenefits();
    SliderHome();
    identifynder();
    Sliderliner();
    SliderInSlider();


    if($(".out-top-section-wrapp").length) {
        $("body").addClass("out-page");
    }


    $(".custom-select-toggle").click(function() {
        $(this).parent().toggleClass("open");
    });


    $(".custom-option").click(function() {
        let selectedItem = $(".custom-selected-item").html();
        let clickedItem = $(this).html();

        $(".custom-selected-item").html(clickedItem);
        $(this).html(selectedItem);

        $(".custom-select-wrapper").removeClass("open");
    });

    $(".out-form-submit").click(function() {
        $(".out-success-message").addClass("active");
        ScrollNone();
    });

    $(".popup-close").click(function() {
        $(this).closest($(".popup-wrapp").removeClass("active"));
         ScrollNone();
    });

    $(window).scroll(function(e) {

        if($(window).scrollTop()>=750) {
            $('.benefits-any-info').addClass("active");
            $('.benefit-img').addClass("active");
        };
        if($(window).scrollTop()>=2200) {
            $('#map-conteiner').addClass("active");
            $('.content-info-wrapper').addClass("active");
        }
    });


    $("#current_lang").click(function(e) {
        e.stopPropagation();
        if ( $(this).hasClass("active") ){
            $(this).removeClass("active");
            $("#lang_drop").removeClass("active");
        } else {
            $(this).addClass("active");
            $("#lang_drop").addClass("active");
        }

    });

    $("html").on("click", function() {
        $("#current_lang").removeClass("active");
        $("#lang_drop").removeClass("active");
        if($("#hamburger-icon").hasClass("active")){
            $("#hamburger-icon").removeClass("active");
            $("#hamburger-wrap").removeClass("active");
            $(".menu").removeClass("active");
            $(".opacity-block").removeClass("active");
        };
        $(".modal").removeClass("active");
    });

    $("#lang_drop, .modal-body").on("click", function(e) {
        e.stopPropagation();
    });


    //youtube script

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    $('.video-button').click(function(ev) {
        $(".video-wrap").fadeOut('normal');
        $(".video-cont>iframe")[0].src += "?0&controls=0&showinfo=0?&autoplay=1";
        ev.preventDefault();
    });


    $('[data-fancybox]').fancybox({
        'scrolling': false,
        'autoScale'         : false,
        'autoDimensions'    : false,
        buttons : [
            'share',
            'thumbs',
            'close'
        ]
    });


    $(".popup-title").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".popup-wrap").removeClass("active");
            $(".popup-wrap").children().removeClass("active");
        }else{
            $(".popup-wrap").removeClass("active");
            $(".popup-wrap").children().removeClass("active");
            $(this).parents(".popup-wrap").children(".popup-down").addClass("active");
            $(this).addClass("active");
            $(this).parents(".popup-wrap").addClass("active");
        }
    });

    $(document).click(function(e) {
        if (!$(e.target).closest(".popup-wrap,.class-item,.popUpContainer, .custom-select-toggle").length) {
            $(".popup-wrap").removeClass("active");
            $(".popup-title").removeClass("active");
            $(".popUpInfoWrapp").removeClass("active");
            $(".custom-select-wrapper").removeClass('open');
        }
        e.stopPropagation();
    });

    $(".pop-active").click(function(){
        $(".pop-up-wrap").addClass("active");
        ScrollNone();
    });

  $("[data-modal-id]").on("click", function(e){
      e.stopPropagation();
    $(".modal[id='"+$(this).attr("data-modal-id")+"']").addClass("active");
  });


    $(".close").click(function(){
        $(this).parent().parent().removeClass("active");
        ScrollNone();
    })

    $(document).click(function(e) {
        if (!$(e.target).closest(".pop-active,.pop-up-wrap, .out-form-submit, .popup-body").length) {
            $(".pop-up-wrap").removeClass("active");
            $(".popup-wrapp").removeClass("active");
            ScrollNone();
        }
        e.stopPropagation();
    });

    SliderConfig();
    // const ps = new PerfectScrollbar('.pop-up-wrap', {
    //     wheelSpeed: 0.20,
    //     wheelPropagation: true,
    //     minScrollbarLength: 2
    // });


    if(name !== null){

        $('#login').css('display','none');
        $('#logout').css('display','block');
        $('#user').css('display','block');
        $('.user-name').html(name);

    }else{

        $('#logout').css('display','none');
        $('#login').css('display','block');
        $('#user').css('display','none');
        $('.user-name').html('');

    }

  (function validateFormElements() {
    $(document).on("change", "input, textarea, select", function () {
      validateFormInput($(this), "valid-element");
    });

    $('input, textarea, select').each(function() {
      validateFormInput($(this), "valid-element");
    });

    $("[type='submit']").on( "click", function() {
      $('input, textarea, select').addClass("valid-element");

      if( $('*').attr("required") === undefined ) {
        $("*[required!='required']").removeClass("valid-element");
      }

      $("*[required!='required']").each(function() {
        if( $(this).val() ) {
          $(this).addClass("valid-element");
        }
      });
    });
  })();

  function validateFormInput(formElem, classname) {
    if (formElem.prop("tagName") === "SELECT") {
      if (formElem.find(":selected") && !formElem.find(":selected").hasClass("default")) {
        formElem.addClass(classname);
      } else {
        formElem.removeClass(classname);
      }
    } else {
      if (formElem.val()) {
        formElem.addClass(classname);
      } else {
        formElem.removeClass(classname);
      }
    }
  }

  $(".modal-close").on("click", function (e) {
      e.stopPropagation();
    $(this).parent().parent().removeClass("active");
  });

});

$(window).resize(function() {
    identifynder();
    topPosition();
});

function SliderConfig(){
    $('.slide-common').owlCarousel({
        loop:false,
        nav:false,
        margin:30,
        dots:true,
        touchDrag:true,
        mouseDrag:true,
        items: 3,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            425:{
                items:1
            },
            1025:{
                items:1
            }
        }
    });
}

function Sliderliner(){

    $('.slide-liner').owlCarousel({
        loop:false,
        nav:false,
        margin:30,
        center: false,
        dots:true,
        touchDrag:true,
        mouseDrag:true,
        items: 3,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1.8,
                center: true,
                loop:true,
            },
            1025:{
                items:3,
            }
        }
    });


}

function SliderHome(){

    $('.slide-home-page').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        touchDrag:true,
        margin:30,
        mouseDrag:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{

            0:{
                items:1
            },
            425:{
                items:1
            },
            1025:{
                items:1
            }
        }
    });

}

function SliderInSlider(){
    $(".slider-in-slider").owlCarousel({
        loop:false,
        nav:false,
        dots:true,
        touchDrag:false,
        mouseDrag:false,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:800,
    });
};

function SliderTab(){

    $('.slide-tab').owlCarousel({
        loop:false,
        nav:false,
        margin:30,
        center: true,
        dots:true,
        touchDrag:false,
        mouseDrag:false,
        items: 3,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{

            0:{
                items:1
            },
            600:{
                items:1.8
            },
            1025:{
                items:3
            }
        }
    });

}

function identifynder(){
    var i =window.innerWidth;
    if(i<=1023){
        SliderTab();
    }
}

function SliderBenefits(){
    $('.slide-benefits').owlCarousel({
        loop:false,
        nav:false,
        margin:30,
        dots:true,
        touchDrag:true,
        mouseDrag:false,
        items: 3,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            425:{
                items:1
            },
            1024:{
                items:3
            }
        }
    });
}

function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(function(){
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}


function cust_col() {
    if($(window).width() > 0 && $(".cust_col").length) {
        var HEIGHT=$(".cust_col").eq(0).height();
        var TOP=$(".cust_col").eq(0).offset().top;
        var index = 0;
        $(".cust_col").each(function(){
            if($(this).offset().top == TOP){
                if($(this).height() < HEIGHT + 1){
                    //  $(this).css("height",HEIGHT + 1);
                } else{
                    HEIGHT = $(this).height();
                }
                $(this).attr("rel",index);
            } else{
                $(".cust_col[rel='"+index+"']").height(HEIGHT);
                index++;
                TOP = $(this).offset().top;
                HEIGHT = $(this).height();
                $(this).attr("rel",index);
            }
        })
        $(".cust_col[rel='"+index+"']").height(HEIGHT);
    };
}

function closeDrops(){
    $("#hamburger-wrap").removeClass("active");
    $("#hamburger-icon").removeClass("active");
    $("#menu").removeClass("active");
    $(".opacity-block").removeClass("active");
}

function topPosition(){
    var i =window.innerWidth;
    if(i<=1270){
        $("#user").insertBefore(".menu-item-wrapper");
        $("#lang_switcher").appendTo(".menu");
    }
    else{
        $("#lang_switcher").insertBefore("#login");
        $("#user").insertBefore("#lang_switcher");
    }
}


function ScrollNone(){
    if($(".pop-up-wrap , .popup-wrapp").hasClass("active")){
        $("body").css("overflow-y","hidden");
    }
    else(
        $("body").css("overflow-y","scroll")
    )
}

function setActiveLink(links) {
    var currentHref = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $("" + links + "").each(function () {
        var $this = $(this);
        var $thisHref = $(this).attr('href').substr($this.attr('href').lastIndexOf("/") + 1);
        if (currentHref == $thisHref) {
            $this.addClass('active');
        }
    });
}