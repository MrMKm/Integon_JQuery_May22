$(() => {
  $('#selected-plays > li')
    .addClass('horizontal');

  $('#selected-plays li:not(.horizontal)')
    .addClass('sub-level');

  $('a[href^="mailto:"]')
    .addClass('mailto');

  $('a[href$=".pdf"]')
    .addClass('pdflink');
  $('a[href^="http"][href*="henry"]')
    .addClass('henrylink');

  $('a').filter((i, a) =>
    a.hostname && a.hostname != location.hostname
  ).addClass('external');

  $('tr:nth-child(odd)')
    .addClass('alt');

  $('td:contains(Henry)') // Find every cell containing "Henry"
    .parent() // Select its parent
    .find('td:eq(1)') // Find the 2nd descendant cell
    .addClass('highlight') // Add the "highlight" class
    .end() // Return to the parent of the cell containing "Henry"
    .find('td:eq(2)') // Find the 3rd descendant cell
    .addClass('highlight'); // Add the "highlight" class

  const forText = [];

   for (let td of $('td')) {
     if (td.textContent.startsWith('H')) {
       forText.push(td.textContent);
     }
   }

   console.log('for', forText);
   // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]});
});
