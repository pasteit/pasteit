$(document).ready(function ( ) {

    var languages = [
              "C++"            , 
              "C"              , 
              "Java"           , 
              "Objective-C"    , 
              "Clojure"        , 
              "Apricot"        , 
              "CoffeeScript"   , 
              "CSS"            , 
              "Diff"           , 
              "Go"             , 
              "Groovy"         , 
              "Haskell"        , 
              "Javascript"     , 
              "Lua"            , 
              "Delphi"         , 
              "Perl"           , 
              "PHP"            , 
              "Java Properties", 
              "Python"         , 
              "R"              , 
              "Ruby"           , 
              "Rust"           , 
              "Scheme"         , 
              "Emacs Lisp"     , 
              "Smalltalk"      , 
              "Verilog"        , 
              "XML"            , 
              "YAML"           , 
              "HTML"           , 
              "MySQL"          , 
              "OCaml"          , 
              "RPM Spec"        
    ];

    languages.forEach(function(l) {
        $("#language").append("<option value=''>"+l+"</option>");
    });

    $("#language").chosen();

    var editor = CodeMirror.fromTextArea( $('#paste')[0], { lineNumbers: true,
        theme: 'cmtn'} );
});
