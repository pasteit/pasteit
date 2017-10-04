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
        "PHP"             : ["css", "javascript", "xml", "clike", "php"],
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
        "HTML"            : ["css", "xml", "javascript", "htmlmixed"],
        "MySQL"           : ["mysql"],
        "OCaml"           : ["ocaml"],
        "RPM Spec"        : [{mode: "spec", path: "rpm/spec/spec"}]
    };

    for(var l in languages) {
        var h = languages[l];
        $("#language").append("<option value='"+h+"'>"+l+"</option>");
    }


    $("#language").chosen();

    $("#language").on("change", function(item) {
        var selected = $("option:selected", this);
        console.log(selected.val());

        editor.setOption("mode", selected.val());
        editor.refresh();


    });

    $("#submit-button").on("click", function() {
        console.log("Test");
        $( "form[name=paste]" ).submit();
    });

    var setupLang = function( lang, editor ) {
        var modes = languages[lang];
        if ( modes ) {
            setMode(modes, editor);
        } else {
            editor.setOption( "mode", null );
        }
    };

    var setLang = function () {
        setupLang( $("#language option:selected").text(), editor );
    };

    var isString = function(obj) {
        return toString.call(obj) == '[object String]';
    };

    var normalizeMode = function(mode) {
        if (isString(mode)) return {mode: mode, path: mode + '/' + mode};
        else return mode;
    };

    var fnotLoaded = function(mode) {
        return !(mode in refheap.loaded);
    };

    var setMode = function(modes, editor) {
        var modes = $.map(modes, function(mode, index) { return normalizeMode(mode) }),
            notLoaded = $.grep(modes, fnotLoaded),
            promises = $.map(notLoaded, function(mode, index) {
                return $.getScript("/js/codemirror/mode/" + mode.path + ".js");
            });
        return $.when.apply($, promises).done(function() {
            $.each(notLoaded, function(mode, i) {
                loaded[mode] = true;
            });
            editor.setOption("mode", modes[modes.length - 1].mode);
        });
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


