$(document).ready(function () {

    // edu Scroll Event
    $(window).scroll(function () {
        var scr = $(window).scrollTop();

        if (scr > 100) {
            $('.edu_01').css('background-attachment', 'fixed').css('background-position', 'center -100px').css('background-size', '1920px 766px');
        } else {
            $('.edu_01').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 1287) {
            $('.edu_02').css('background-attachment', 'fixed').css('background-position', 'center -520px').css('background-size', '1920px 1408px');
        } else {
            $('.edu_02').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 2545) {
            $('.edu_03').css('background-attachment', 'fixed').css('background-position', 'center -363px').css('background-size', '1920px 1259px');
        } else {
            $('.edu_03').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 4032) {
            $('.edu_04').css('background-attachment', 'fixed').css('background-position', 'center -600px').css('background-size', '1920px 1487px');
        } else {
            $('.edu_04').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 5376) {
            $('.edu_05').css('background-attachment', 'fixed').css('background-position', 'center -454px').css('background-size', '1920px 1343px');
        } else {
            $('.edu_05').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 7305) {
            $('.edu_06').css('background-attachment', 'fixed').css('background-position', 'center -1043px').css('background-size', '1920px 1929px');
        } else {
            $('.edu_06').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 8282) {
            $('.edu_07').css('background-attachment', 'fixed').css('background-position', 'center -92px').css('background-size', '1920px 978px');
        } else {
            $('.edu_07').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

    });
});
