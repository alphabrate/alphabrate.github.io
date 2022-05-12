var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "javascript",
    lineNumbers: true,
    theme: "dracula"
});

function getNum(n, m) {
    // n, m is a number.
    // let n have the same number of digits as m.
    // for example, if n = 1 and m = 100, then n = 001.
    var str = n.toString();
    var str2 = m.toString();
    var len = str2.length;
    var str3 = '';
    for (var i = 0; i < len - str.length; i++) {
        str3 += '0';
    }
    str3 += str;
    return 'Ouput ' + str3;
}

try {
    location.href.includes('&script=') ? editor.setValue(decodeURIComponent(location.href.split('&script=')[1])) : '';
    location.href.includes('?error=') ? $('#error').append(`<br>===========<br><red>${decodeURIComponent(location.href.split('?error=')[1].split('&script=')[0])}</red>`) : '';
    if (location.href.includes('?success=t')) {
        $('#error').append(`<br><yellow>Code no errors.</yellow><red><br>===========<br></red>`);
        for (let i = 0; i < JSON.parse(JSON.parse(localStorage.getItem(location.href.split('token=')[1].split('&')[0])).length); i++) {
            $('#error').append(`<blue>${JSON.parse(localStorage.getItem(location.href.split('token=')[1].split('&')[0]))[i]}</blue><br>`);
        }
    }
} catch (e) {
    console.error(e);
}
$('#submit').click(function() {
    location = '../testScript.html?dt=' + location.href + '&script=' + editor.getValue();
});

dt = '../testScript.html'
$('#submit').click(function() {
    if (location.href.includes('?')) {
        var url = location.href.split('?')[0];
    } else {
        var url = location.href;
    }
    window.location.replace(`${dt}?dt=${url}&script=${editor.getValue().replaceAll('\n','%0A')}&testval=`);
});