let languages = {
    'C++': ['clike'],
    'C': ['clike'],
    'Java': ['clike'],
    'Objective-C': ['clike'],
    'C#': ['clike'],
    'Clojure': ['clojure'],
    'Apricot': ['clojure'],
    'CoffeeScript': ['coffeescript'],
    'CSS': ['css'],
    'Diff': ['diff'],
    'Go': ['go'],
    'Groovy': ['groovy'],
    'Haskell': ['haskell'],
    'Javascript': ['javascript'],
    'Lua': ['lua'],
    'Delphi': ['pascal'],
    'Perl': ['perl'],
    'PHP': ['php'],
    'Java Properties': ['properties'],
    'Python': ['python'],
    'R': ['r'],
    'Ruby': ['ruby'],
    'Rust': ['rust'],
    'Scheme': ['scheme'],
    'EmacsLisp': ['scheme'],
    'Smalltalk': ['smalltalk'],
    'Verilog': ['verilog'],
    'XML': ['xml'],
    'YAML': ['yaml'],
    'HTML': ['htmlmixed'],
    'MySQL': ['mysql'],
    'OCaml': ['ocaml'],
};

let mimes = {
    'C++': 'text/x-c++src',
    'C': 'text/x-csrc',
    'C#': 'text/x-csharp',
    'Objective-C': 'text/x-objectivec',
    'Java': 'text/x-java',
};

let getLangKey = function(languageKey) {
    for(let k in languages) {
        if (languages[k] == languageKey || mimes[k] == languageKey) {
            return k;
        }
    }
};
