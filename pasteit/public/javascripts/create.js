/*global $ mimes paste CodeMirror languages setMime */
$(document).ready(function() {
    let editor = CodeMirror.fromTextArea( $('#paste')[0], {lineNumbers: true,
        theme: 'cmtn'} );
    let toggleWrapping = function() {
        editor.setOption('lineWrapping', !editor.getOption('lineWrapping'));
    };

    for (let l in languages) {
        let h = languages[l];
        $('#language').append('<option value="'+h+'">'+l+'</option>');
    }

    $('#language').chosen();

    $('#language').on('change', function(item) {
        setMime();
    });

    $('#submit-button').on('click', function() {
        $( 'form[name=paste]' ).submit();
    });

    $('input[type=radio][name=ww-toggle]').change(function() {
        editor.setOption('lineWrapping', this.value==="enabled");
    });    

    let setMime = function() {
        let mime = $('#language option:selected').text();
        $('#mime').val(mimes[mime]);
    };

    editor.setOption( 'extraKeys', {
        'Ctrl-Enter': paste,
        'Alt-W': toggleWrapping
    });

    var setCodeHeight = function(editor) {
        let currentHeight = $( window ).height();
        if ( currentHeight > 600 ) {
            $('.CodeMirror').height( currentHeight - 200 );
            editor.refresh();
        }
    };

    $(window).on('resize', function() {
        setCodeHeight(editor);
    });

    setCodeHeight(editor);
});


