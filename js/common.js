$(document).ready(function () {
    
    // 배경 이미지 정보를 배열로 저장
    var bgImages = [
        { selector: '.edu_01', attachment: 'fixed', position: 'center -100px', size: '1920px 766px', offset: 100 },
        { selector: '.edu_02', attachment: 'fixed', position: 'center -520px', size: '1920px 1408px', offset: 1287 },
        { selector: '.edu_03', attachment: 'fixed', position: 'center -363px', size: '1920px 1259px', offset: 2545 },
        { selector: '.edu_04', attachment: 'fixed', position: 'center -600px', size: '1920px 1487px', offset: 4032 },
        { selector: '.edu_05', attachment: 'fixed', position: 'center -454px', size: '1920px 1343px', offset: 5376 },
        { selector: '.edu_06', attachment: 'fixed', position: 'center -1043px', size: '1920px 1929px', offset: 7305 },
        { selector: '.edu_07', attachment: 'fixed', position: 'center -92px', size: '1920px 978px', offset: 8282 },
    ];

    $(window).scroll(function () {
        var scr = $(window).scrollTop();

        // 각 배경 이미지 정보를 순회하면서 처리
        bgImages.forEach(function (image) {
            var $element = $(image.selector);
            if (scr > image.offset) {
                $element.css({
                    'background-attachment': image.attachment,
                    'background-position': image.position,
                    'background-size': image.size
                });
            } else {
                $element.css({
                    'background-attachment': 'inherit',
                    'background-position': 'center',
                    'background-size': 'cover'
                });
            }
        });
    });

});
