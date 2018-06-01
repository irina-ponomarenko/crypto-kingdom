$(document).ready(function () {
	$('.click-menu').click(function() {
		$('.left-content').hide(200);
		$('.wrapper-hide').css('display', 'block');
	})
	$('.click-hide').click(function() {
		$('.left-content').show(200);
		$('.wrapper-hide').css('display', 'none');
	});
    $('#save').click( function(event) {
        $('.success')
            .css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
            .animate({opacity: 1,  right: '20px'}, 200);
        $('.success-click').click(function(){
            $('.success')
                .animate({opacity: 1, right: '-430px'}, 200);
        });
    });
    $('#error-save').click( function(event) {
        $('.error')
            .css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
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
    })
});