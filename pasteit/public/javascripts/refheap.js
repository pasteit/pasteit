/*
 * Refheap UI Enhancements
 */

$(document).ready( function () {
    $( "#help-bubble" ).click( function () {
        $( "#help-dialog" ).slideToggle( "fast" )
            .find( "h3 > span" ).on( "click", function () {
                $( "#help-dialog" ).fadeOut( "fast" );
            });
    });
});

