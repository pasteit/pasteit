$(document).ready(function() {
    var editor = CodeMirror.fromTextArea( $('#paste')[0], { 
        lineNumbers: true, 
        readOnly: true, 
        nocursor: true,
        theme: 'cmtn',
        mode: $("#selected-mode").val()
    });

    editor.getDoc().setValue($("#pasted-content").val());
    editor.refresh();
});
