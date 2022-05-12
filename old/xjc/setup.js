if (localStorage.getItem('XJCConfig') == null) {
    var json = `{
        "display": {
            "displayConsole": true,
            "theme": "default",
            "editorFontSize": "24px",
            "consoleFontSize": "20px"
        },
        "message": {
            "lineColor": "#fff111",
            "fontSize": "20px"
        },
        "save": {
            "autoSave": false,
            "autoSaveTime": 30000
        },
        "storage": {
            "autoClear": false,
            "autoClearTime": 30,
            "autoClearTimeUnit": "days"
        }
    }`;
    localStorage.setItem('XJCConfig', json);
    console.log('XJC setup complete.');
    debugger;
    window.location.replace('editor');
} else {
    console.log('XJC already setup.');
    debugger;
    window.location.replace('editor');
}