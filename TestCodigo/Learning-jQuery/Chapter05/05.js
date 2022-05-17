// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// $(() => {
//     $('div.chapter a[href*="wikipedia"]')
//     .attr({
//         rel: 'external',
//         title: function() {
//             return `Learn more about ${$(this).text()} at Wikipedia.`;
//         },
//         id: index => `wikilink-${index}`
//     });
// });

// $(() => {
//     $('#hide-read')
//     .change((e) => {
//         if ($(e.target).is(':checked')) {
//             $('.chapter p')
//             .filter((i, p) => $(p).data('read'))
//             .hide();
//         } 
//         else {
//             $('.chapter p').show();
//         }
//     });
//     $('.chapter p')
//     .click((e) => {
//         const $elm = $(e.target);
//         $elm
//         .css(
//         'textDecoration',
//         $elm.data('read') ? 'none' : 'line-through'
//         )
//         .data('read', !$(e.target).data('read'));
//     });
// });

// $(() => {
//     $('<a href="#top">back to top</a>')
//     .insertAfter('div.chapter p');
//     $('<a id="top"></a>')
//     .prependTo('body');

//     // .insertBefore(): Adds content outside of and before existing elements
//     // .prependTo(): Adds content inside of and before existing elements
//     // .appendTo(): Adds content inside of and after existing elements
//     // .insertAfter(): Adds content outside of and after existing elements
// });

// $(() => {
//     $('span.footnote')
//     .insertBefore('#footer')
//     .wrapAll('<ol id="notes"></ol>')
//     .wrap('<li></li>');
// });

// $(() => {
//     const $notes = $('<ol id="notes"></ol>')
//     .insertBefore('#footer');
//     $('span.footnote')
//     .each((i, span) => {
//         $(`<sup>${i + 1}</sup>`)
//         .insertBefore(span);
//         $(span)
//         .appendTo($notes)
//         .wrap('<li></li>');
//     });
// });

// $('div.chapter p:eq(0)')
// .clone()
// .insertBefore('div.chapter');

// Exercises

// Alter the code that introduces the back to top links so that the links only appear beginning after the fourth paragraph.

$(() => {
    $('<a href="#top">Back to top</a>').insertAfter('div.chapter p:gt(2)');
});

// When a back to top link is clicked, add a new paragraph after the link, containing the message You were here. Ensure that the link still works.

$(() => {
    $('a').click(function () {
        $('p:contains("You were here.")').remove();
        $(this).after('<p style=\"color: blue\">You were here.</p>');
    });
});

// When the author's name is clicked, turn it bold (by adding a tag, rather than manipulating classes or CSS attributes).

$(() => {
    $('#f-author').toggle(
        function () {
            $(this).wrap('<b></b>');
        },
        function () {
            $(this).unwrap()
        }
    );
});


