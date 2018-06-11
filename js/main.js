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


    $('.btn-js').focus(function() {
        $(this)
            .parent()
            .find('.copy-address')
            .addClass('adress-active');
    });

    $('.btn-js').on('blur', function() {
        setTimeout(() => {
            $(this)
                .parent()
                .find('.copy-address')
                .removeClass('adress-active');
        }, 100);
    });


    $('.copy-clipboard-js').on('click', function() {
        let el = $(this)
            .closest('.form-setting')
            .find('.btn-js')[0];

        el.select();

        document.execCommand('copy');

        // alert("Copied the text: " + el.value);
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

    });


    $('.drop_down').click(function() {
        $(this)
            .closest('.display-change')
            .find('.dropdown-info-block')
            .slideToggle(300);
        $(this)
            .toggleClass('active-chewron')
    });

    $('.click-bitcoin').click(function() {
        $(this)
            .closest('.bitcoin-block')
            .find('.dropdown-bitcoin-block')
            .slideToggle(300);
        $(this)
            .toggleClass('active-profile-chewron')
    });
    $('.submit-rules').click(function () {
        $(this).css('display', 'none');
        $('.accept').css('display', 'block');
    });


    var time = 60;
    var initialOffset = '380';
    var i = 1

    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

    var interval = setInterval(function() {
        $('h5').text(i);
        if (i == time) {
            clearInterval(interval);
            return;
        }
        $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
        i++;
    }, 1000);
});
