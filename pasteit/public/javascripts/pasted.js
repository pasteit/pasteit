$(document).ready(function() {

    var mode = "";
    if( $('#mime-type').val() != "" ) 
        mode = $('#mime-type').val();
    else
        mode = $("#selected-mode").val();
    var humanreadable = getLangKey(mode);
    
    var editor = CodeMirror.fromTextArea( $('#paste')[0], { 
        lineNumbers: true, 
        readOnly: true, 
        nocursor: true,
        theme: 'cmtn',
        mode: mode
    });

    editor.getDoc().setValue($("#pasted-content").val());
    editor.refresh();

    $("#delete").prop("href", "/delete"+window.location.pathname);
    $("#lang-hr").text(humanreadable);
});
