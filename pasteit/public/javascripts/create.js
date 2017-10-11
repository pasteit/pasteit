$(document).ready(function ( ) {
    var editor = CodeMirror.fromTextArea( $('#paste')[0], { lineNumbers: true,
        theme: 'cmtn'} );
    var toggleWrapping = function () {
        editor.setOption("lineWrapping", !editor.getOption("lineWrapping"));
    };

    for(var l in languages) {
        var h = languages[l];
        $("#language").append("<option value='"+h+"'>"+l+"</option>");
    }

    $("#language").chosen();

    $("#language").on("change", function(item) {
        setMime();
    });

    $("#submit-button").on("click", function() {
        $( "form[name=paste]" ).submit();
    });

    var setMime = function() {
        var mime = $("#language option:selected").text();
        $("#mime").val(mimes[mime]);
    };
    
    editor.setOption( "extraKeys", {
        "Ctrl-Enter": paste,
        "Alt-W": toggleWrapping
    });

    setCodeHeight = function (editor) {
        var currentHeight = $( window ).height();
        if ( currentHeight > 600 ) {
            $( ".CodeMirror" ).height( currentHeight - 200 );
            editor.refresh();
        }
    };

    $(window).on( "resize", function () {
        setCodeHeight(editor);
    });

    setCodeHeight(editor);

});


