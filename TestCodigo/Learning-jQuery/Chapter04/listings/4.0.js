// $(() => {
//     const sizeMap = {
//     'switcher-small': n => n / 1.4,
//     'switcher-large': n => n * 1.4,
//     'switcher-default': () => defaultSize
//     };
//     const $speech = $('div.speech');
//     const defaultSize = parseFloat($speech.css('fontSize'));
//     $('#switcher button')
//     .click((e) => {
//         const num = parseFloat($speech.css('fontSize'));
//         $speech.css(
//         'fontSize',
//         `${sizeMap[e.target.id](num)}px`
//         );
//     });
// });

// $(() => {
//     $('p')
//         .eq(1)
//         .hide();
//     $('a.more')
//     .click((e) => {
//         e.preventDefault();
//         $('p')
//         .eq(1)
//         .show('slow');
//         $(e.target)
//         .hide();
//     });
// });

// $(() => {
//     $('p')
//     .eq(1)
//     .hide();
//     $('a.more')
//         .click((e) => {
//         e.preventDefault();
//             $('p')
//             .eq(1)
//             .fadeIn('slow');
//             $(e.target)
//             .hide();
//         });
// });

// $(() => {
//     $('p')
//     .eq(1)
//     .hide();
//     $('a.more')
//     .click((e) => {
//         e.preventDefault();
//         $('p')
//         .eq(1)
//         .slideDown('slow');
//         $(e.target)
//         .hide();
//     });
// });

// $(() => {
//     const $firstPara = $('p')
//     .eq(1)
//     .hide();
//     $('a.more')
//     .click((e) => {
//         e.preventDefault();
//         if ($firstPara.is(':hidden')) {
//             $firstPara.fadeIn('slow');
//             $(e.target).text('read less');
//         } 
//         else {
//             $firstPara.fadeOut('slow');
//             $(e.target).text('read more');
//         }
//     });
// });

// $(() => {
//     const $firstPara = $('p')
//     .eq(1)
//     .hide();
//     $('a.more')
//     .click((e) => {
//         e.preventDefault();
//         $firstPara.slideToggle('slow');
//         $(e.target)
//         .text(
//         $(e.target).text() === 'read more' ?
//         'read less' : 'read more'
//         );
//     });
// });

// $(() => {
//     const sizeMap = {
//     'switcher-small': n => n / 1.4,
//     'switcher-large': n => n * 1.4,
//     'switcher-default': () => defaultSize
//     };
//     const $speech = $('div.speech');
//     const defaultSize = parseFloat($speech.css('fontSize'));
//     $('#switcher button')
//     .click((e) => {
//         const num = parseFloat($speech.css('fontSize'));
//         $speech.animate({
//         fontSize: `${sizeMap[e.target.id](num)}px`
//         });
//     });
// });

// $(() => {
//     $('div.label')
//     .click((e) => {
//         const $switcher = $(e.target).parent();
//         const paraWidth = $('div.speech p').outerWidth();
//         const switcherWidth = $switcher.outerWidth();
//         $switcher.animate({
//             borderWidth: '5px',
//             left: paraWidth - switcherWidth,
//             height: '+=20px'
//             }, 'slow');
//     });
// });

// $(() =>
//     $('div.label')
//     .click((e) => {
//         const $switcher = $(e.target).parent();
//         const paraWidth = $('div.speech p').outerWidth();
//         const switcherWidth = $switcher.outerWidth();
//         $switcher.css('position', 'relative')
//         .animate({
//             borderWidth: '5px',
//             left: paraWidth - switcherWidth,
//             height: '+=20px'
//         }, 'slow');
// }));

// $(() => {
//     $('div.label')
//     .click((e) => {
//         const $switcher = $(e.target).parent();
//         const paraWidth = $('div.speech p').outerWidth();
//         const switcherWidth = $switcher.outerWidth();
//         $switcher
//         .css('position', 'relative')
//         .animate({ borderWidth: '5px' }, 'slow')
//         .animate({ left: paraWidth - switcherWidth }, 'slow')
//         .animate({ height: '+=20px' }, 'slow');
//     });
// });

// $(() => {
//     $('div.label')
//     .click((e) => {
//         const $switcher = $(e.target).parent();
//         const paraWidth = $('div.speech p').outerWidth();
//         const switcherWidth = $switcher.outerWidth();
//         $switcher
//         .css('position', 'relative')
//         .fadeTo('fast', 0.5)
//         .animate(
//         { left: paraWidth - switcherWidth },
//         { duration: 'slow', queue: false }
//         )
//         .fadeTo('slow', 1.0)
//         .slideUp('slow')
//         .slideDown('slow');
//     });
// });

// $(() => {
//     $('div.label')
//     .click((e) => {
//         const $switcher = $(e.target).parent();
//         const paraWidth = $('div.speech p').outerWidth();
//         const switcherWidth = $switcher.outerWidth();
//         $switcher
//         .css('position', 'relative')
//         .fadeTo('fast', 0.5)
//         .animate(
//         { left: paraWidth - switcherWidth },
//         { duration: 'slow', queue: false }
//         )
//         .fadeTo('slow', 1.0)
//         .slideUp('slow')
//         .queue((next) => {
//             $switcher.css('backgroundColor', '#f00');
//             next();
//             })
//             .slideDown('slow');
//     });
// });

// $(() => {
//     $('p')
//     .eq(2)
//     .css('border', '1px solid #333')
//     .click((e) => {
//     $(e.target)
//         .next()
//         .slideDown('slow', () => {
//         $(e.target).slideUp('slow');
//         });
//     });
//     $('p')
//     .eq(3)
//     .css('backgroundColor', '#ccc')
//     .hide();
// });

// Exercises

// Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.

$(() => {
    $('body').hide().fadeIn('slow');
});

// Give each paragraph a yellow background only when the mouse is over it.

$(() => {
    $('p').hover(function () {
        $(this).css('background-color', 'yellow');
    }, function () {
        $(this).css('background-color', 'white');
    });
});

// Make a click of the title (<h2>) simultaneously make it fade to 25% opacity and get a left margin of 20px, then when this is complete, fade the speech text to 50% opacity.

$(() => {
    $('h2').click(function () {
        $(this).fadeTo('slow', .25).animate({
            marginLeft: '20px'
        }, {
            duration: 'slow',
            queue: false
        }, function () {
            $('.speech').fadeTo('slow', .5)
        });
    });
});

// React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

$(() => {
    let $switcher = $('#switcher');

    $switcher.css('position', 'relative')

    $(document).keyup(function (event) {
        if (event.keyCode == 37) {         
            $switcher.animate({
                left: '+=-20px'
            }, 'slow');
        }
        else if (event.keyCode == 38) {        
            $switcher.animate({
                top: '+=-20px'
            }, 'slow');
        }
        else if (event.keyCode == 39) {      
            $switcher.animate({
                right: '+=-20px'
            }, 'slow');
        }
        else if (event.keyCode == 40) {        
            $switcher.animate({
                bottom: '+=-20px'
            }, 'slow');
        }
        
    });
});


