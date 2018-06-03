$(document).ready(function () {
    $('.click-menu').click(function() {
        $('.left-content').addClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'block');
    });

    $('.click-hide').click(function() {
        $('.left-content').removeClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'none');
    });


    $('#save').click( function(event) {
        $('.success')
            .css('display', 'flex')
            .animate({opacity: 1,  right: '20px'}, 200);

        $('.success-click').click(function(){
            $('.success')
                .animate({opacity: 1, right: '-430px'}, 200);
        });
    });


    $('#error-save').click( function(event) {
        $('.error')
            .css('display', 'flex')
            .animate({opacity: 1,  right: '20px'}, 200);

        $('.error-click').click(function(){
            $('.error')
                .animate({opacity: 1, right: '-430px'}, 200);
        });
    });
    $('.btn-js').on('click', function() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
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
});
