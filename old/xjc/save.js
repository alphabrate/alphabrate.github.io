var save = true;

window.addEventListener('beforeunload', function(e) {
    if (!save) {
        console.log(e);
        e.preventDefault();
        e.returnValue = '';
    }
})

if (localStorage.getItem('XJCfilename') == null) {
    localStorage.setItem('XJCfilename', 'untitled.js');
}

document.title = 'JavaScript Console - ' + localStorage.getItem('XJCfilename');

function download(filename, context) {
    save = true;
    document.title = 'JavaScript Console - ' + localStorage.getItem('XJCfilename');
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(context));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

var changeUrl = function() {
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
            if (!save) {
                save = true;
                download(localStorage.getItem('XJCfilename'), editor.getValue());
            }
        }
    });
    document.title = '* JavaScript Console - ' + localStorage.getItem('XJCfilename');
    save = false;
    window.history.pushState({}, 0, `?&script=${editor.getValue().replaceAll('\n','%0A')}`);
}

document.getElementById('filename').addEventListener('change', function() {
    if (this.value.length == 0) this.value += 'untitled';
    if (!this.value.substring(this.value.length - 3) != ('.js')) {
        this.value += '.js';
    }
    localStorage.setItem('XJCfilename', this.value);
    document.title = '* JavaScript Console - ' + localStorage.getItem('XJCfilename');
});

document.getElementById('download').addEventListener('click', function() {
    download(localStorage.getItem('XJCfilename'), editor.getValue());
});

document.getElementById('filename').value = localStorage.getItem('XJCfilename');

function handleFiles(files) {
    if (files.length) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function() {
            if (confirm('Sees that you want to upload the file: ' + file.name + '\nIt will replace your code.\nDo you want to continue?')) {
                editor.setValue(this.result)
                console.log(this.result);
                save = true;
                changeUrl();
                localStorage.setItem('XJCfilename', file.name);
                location.reload();
            }
        };
        reader.readAsText(file);
    }
}

if (autoSave == "true") {
    setInterval(function() {
        download(localStorage.getItem('XJCfilename'), editor.getValue());
    }, autoSaveTime);
}