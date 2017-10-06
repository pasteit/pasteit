$(document).ready(function ( ) {
    var editor = CodeMirror.fromTextArea( $('#paste')[0], { lineNumbers: true,
        theme: 'cmtn'} );
    var toggleWrapping = function () {
        editor.setOption("lineWrapping", !editor.getOption("lineWrapping"));
    };

    var languages = { 
        "C++"             : ["clike"],
        "C"               : ["clike"],
        "Java"            : ["clike"],
        "Objective-C"     : ["clike"],
        "C#"              : ["clike"],
        "Clojure"         : ["clojure"],
        "Apricot"         : ["clojure"],
        "CoffeeScript"    : ["coffeescript"],
        "CSS"             : ["css"],
        "Diff"            : ["diff"],
        "Go"              : ["go"],
        "Groovy"          : ["groovy"],
        "Haskell"         : ["haskell"],
        "Javascript"      : ["javascript"], 
        "Lua"             : ["lua"],
        "Delphi"          : ["pascal"],
        "Perl"            : ["perl"],
        "PHP"             : ["php"],
        "Java Properties" : ["properties"],
        "Python"          : ["python"],
        "R"               : ["r"],
        "Ruby"            : ["ruby"],
        "Rust"            : ["rust"],
        "Scheme"          : ["scheme"],
        "Emacs Lisp"      : ["scheme"],
        "Smalltalk"       : ["smalltalk"],
        "Verilog"         : ["verilog"],
        "XML"             : ["xml"],
        "YAML"            : ["yaml"],
        "HTML"            : ["htmlmixed"],
        "MySQL"           : ["mysql"],
        "OCaml"           : ["ocaml"],
    };

    var mimes = {
        "C++"  : "text/x-c++src",
        "C"    : "text/x-csrc",
        "C#"   : "text/x-csharp",
        "Objective-C" : "text/x-objectivec",
        "Java" : "text/x-java",
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


    window.editor = CodeMirror.fromTextArea( $('#paste')[0], { lineNumbers: true,
        theme: 'cmtn'} );

});


