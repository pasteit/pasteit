$(document).ready(function() {
    let mode = '';

    if ($('#mime-type').val() != '') {
        mode = $('#mime-type').val();
    } else {
        mode = $('#selected-mode').val();
    }

    let humanReadable = getLangKey(mode);
    let editor = CodeMirror.fromTextArea( $('#paste')[0], {
        lineNumbers: true,
        readOnly: true,
        nocursor: true,
        theme: 'cmtn',
        mode: mode,
    });

    editor.getDoc().setValue($('#pasted-content').val());
    editor.refresh();

    let url = window.location.pathname;
    let hash = url.split('/').slice(-1)[0];
    $('#delete').prop('href', '/delete/' + hash);
    $('#lang-hr').text(humanReadable);
});
