$(document).ready(function () {
    var ov = $('.ov');

    $('.phoneMask').mask('+7 (999) 999-99-99');

    //slider
    $(function () {
        var slider = $('.slider');

        if (slider.length) {
            slider.each(function () {
                var currentSlider = $(this),
                    sliderWrapper = $(this).children('.slider__wrapper');

                if (slider.hasClass('slider-promo')) {
                    sliderWrapper.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        prevArrow: currentSlider.find('.slider-button-prev'),
                        nextArrow: currentSlider.find('.slider-button-next'),
                        responsive: [
                            {
                                breakpoint: 990,
                                settings: {
                                    arrows: false,
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                setting: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 480,
                                setting: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    })
                }
            });
        }
    });

    //modal
    $(function () {
        var modalLink = $('*[data-modal]'),
            modalClose = $('.modal__close');

        modalLink.on('click', function () {
            var dataModal = $(this).data('modal');

            console.log(dataModal);

            $('.modal.-active').removeClass('-active');
            $('#' + dataModal).addClass('-active');
            ov.addClass('-active');
        });

        modalClose.on('click', function () {
            $(this).parents('.modal').removeClass('-active');
            ov.removeClass('-active');
        });

        ov.on('click', function () {
            $('.modal.-active').removeClass('-active');
            $(this).removeClass('-active');
        });
    });

    $('.phoneMask').on('paste', function (event) {
        var pastedData = event.originalEvent.clipboardData.getData('text');

        if (pastedData.length >= 11 && pastedData[0] === '8') {
            console.log(pastedData.slice(1));
            $(this).val(pastedData.slice(1));
        }
    });
    
    var supInfo = $('.sup-info');

    if (supInfo.length) {
        supInfo.each(function () {
            if ($(window).width() < 768) {
                var icon = $(this).find('.icon'),
                    wrapper = $(this).find('.info-wrapper');

                icon.click(function () {
                    wrapper.toggleClass('-active');
                    ov.fadeIn();
                });

                ov.click(function () {
                    wrapper.toggleClass('-active');
                    ov.fadeOut();
                });
            }
        });
    }

    var form = $('.sale-form-block-2, .sale-form-block-vertical-2'),
        inputField = form.find('.input__field.-has-label');

    if (inputField.length) {
        inputField.each(function () {
            var input = $(this).children('.input'),
                label = $(this).children('.label');

            input.on('keydown', function () {
                if ($(this).val().length !== 0) {
                    label.addClass('-active');
                } else {
                    label.removeClass('-active');
                }
            });
        });
    }
});