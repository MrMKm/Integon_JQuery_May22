// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(() => {
    // $('#switcher-default')
    //     .addClass('selected');

    // $('#switcher button')
    //     .click((e) => {
    //     const bodyClass = e.target.id.split('-')[1];
    //     $('body')
    //     .removeClass()
    //     .addClass(bodyClass);
    //     $(e.target)
    //     .addClass('selected')
    //     .removeClass('selected');
    //     e.stopPropagation();
    // });

    // $('#switcher-narrow')
    // .on('click', () => {
    // $('body')
    // .removeClass()
    // .addClass('narrow');
    // });

    // $('#switcher-large')
    // .on('click', () => {
    // $('body')
    // .removeClass()
    // .addClass('large');
    // });

    // $('#switcher')
    //     .click(function(event) {
    //         if (event.target == this) {
    //             $(this).children('button').toggleClass('hidden');
    //         }
    //     });

    // $('#switcher h3')
    //     .hover(function () {
    //         $(this).addClass('hover');
    //     }, function() {
    //         $(this).removeClass('hover');
    //     });

    // $(() => {
    //     const toggleSwitcher = (e) => {
    //     if (!$(e.target).is('button')) {
    //     $(e.currentTarget)
    //     .children('button')
    //     .toggleClass('hidden');
    //     }
    //     };

    //     $('#switcher').on('click.collapse', toggleSwitcher);
    //     $('#switcher-narrow, #switcher-large')
    //     .click(() => {
    //     $('#switcher').off('click.collapse');
    //     });

    //     $('#switcher-default')
    //     .click(() => {
    //     $('#switcher').on('click.collapse', toggleSwitcher);
    //     });
    // });

    //     $('#switcher').trigger('click');

    // $(() => {
    //     const triggers = {
    //     D: 'default',
    //     N: 'narrow',
    //     L: 'large'
    //     };
    //     $(document)
    //         .keyup((e) => {
    //         const key = String.fromCharCode(e.which);
    //         if (key in triggers) {
    //         $(`#switcher-${triggers[key]}`).click();
    //         }
    //         });
    // });

    //Exercises

    // When Charles Dickens 1. is clicked, apply the selected style to it.

    $('.author')
        .click(function() { 
            $(this).toggleClass('selected') 
        });

    // When a chapter title (<h3 class="chapter-title">) is double-clicked, toggle the visibility of the chapter text.

    $('.chapter-title')
        .click(function() {
            $(this).nextAll('p')
                .toggleClass('hidden');
    })

    // When the user presses the right arrow key, cycle to the next body class. The key code for the right arrow key is 39.

    let setClass = function() {
        let body = $('body');
        if (body.hasClass('narrow')) {
            body.removeClass().addClass('large');
        }
        else if (body.hasClass('large')) {
            body.removeClass();
        }
        else {
            body.removeClass().addClass('narrow');
        }
    };
         
    $(document).keyup(function(event) {
        if (event.which == 39) {
            setClass();
        }
    })
});