// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(() => {
    $('#selected-plays > li')
    .addClass('big-letter');

    $('#selected-plays li.horizontal')
    .addClass('big-letter');

    $('#selected-plays li:not(.sub-level)')
    .addClass('big-letter');

    $(() => {
        $('a[href^="mailto:"]')
        .addClass('mailto');

        $('a[href$=".pdf"]')
        .addClass('pdflink');

        $('a[href^="http"][href*="henry"]')
        .addClass('henrylink');
        });

    $(() => {
        $('tr:even').addClass('alt');
    });

    $(() => {
        $('tr:nth-child(odd)').addClass('alt');
    });

    $('tr')
    .filter(':even')
    .addClass('alt');

    $('a')
    .filter((i, a) =>
    a.hostname && a.hostname !== location.hostname
    )
    .addClass('external');

    $(() => {
        $('td:contains(Henry)')
        .next() // nextAll(), prev()
        .addClass('highlight');
    });

    $('td:contains(Henry)') // Find every cell containing "Henry"
        .parent() // Select its parent
        .find('td:eq(1)') // Find the 2nd descendant cell
        .addClass('highlight') // Add the "highlight" class
        .end() // Return to the parent of the cell containing "Henry"
        .find('td:eq(2)') // Find the 3rd descendant cell
        .addClass('highlight'); // Add the "highlight" class

    const eachText = [];

    $('td')
    .each((i, td) => {
        if (td.textContent.startsWith('H')) {
            eachText.push(td.textContent);
        }
    });
    console.log('each', eachText);
    // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]
});

// Exercises
$(() => {
    //Add a class of special 1. to all of the <li> elements at the second level of the nested list.
    $('li:nth-child(even)')
    .addClass('special');

    // Add a class of year to all the table cells in the third column of a table.
    $(() => {
        $('td')
        .next() 
        .next()
        .next()
        .addClass('year');
    });

    // Add the class special to the first table row that has the word Tragedy in it.
    $(() => {
        $('tr:contains(Tragedy)')
        .find('tr:eq(0)')
        .addClass('special');
    });

    // Select all the list items (<li>s) containing a link (<a>). Add the class afterlink to the sibling list items that follow the ones selected.
    $(() => {
        $('li')
        .children('a')
        .parent('li')
        .nextAll('li')
        .addClass('afterlink');
    });

    // Add the class tragedy to the closest ancestor <ul> of any .pdf link.
    $(() => {
        $('li a[href$=".pdf"]')
        .closest('ul')
        .addClass('tragedy');
    });
});




