$(document).ready(function () {
    $('.click-menu').click(function() {
        $('.left-content').addClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'block');
    });

    $('.click-hide').click(function() {
        $('.left-content').removeClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'none');
    });

    setTimeout(function() {
        $('.success').css('display', 'flex');
    }, 5000);
    setTimeout ("$('.success').fadeIn('slow');", 5000);
    setTimeout ("$('.success').fadeOut('slow');", 8000);

    setTimeout(function() {
        $('.error').css('display', 'flex');
    }, 6000);
    setTimeout ("$('.error').fadeIn('slow');", 6000);
    setTimeout ("$('.error').fadeOut('slow');", 9000);

    $('.success-click').on('click',function () {
        $('.success').css('display', 'none');
    });
    $('.error-click').on('click',function () {
        $('.error').css('display', 'none');
    });


    $('.btn-js').on('focus', function() {
        $(this)
            .parent()
            .find('.copy-address')
            .addClass('adress-active')
    });
    $('.btn-js').on('blur', function() {
        $(this)
            .parent()
            .find('.copy-address')
            .removeClass('adress-active')
    });


    $('.fade_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#fade').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });

    $("#click_down_1").on("click", function(){
        $("#info_block_1").css('display', 'block');
    });

    $('#click_dropdown').on('click', function(){
        $('.dropdown-profile').toggleClass('active-profile');
        return false;
    });
});
