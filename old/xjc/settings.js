function closeSettingsTab() {
    $('#settings').css('animation', 'closeTab 0.5s');
    setTimeout(function() {
        $('#settings').hide();
        $('#settingBackground').css('opacity', '0');
        setTimeout(function() {
            $('#settingBackground').hide();
        }, 300);
    }, 500);
}

function openSettingsTab() {
    $('#settings').show();
    $('#settings').css('animation', 'openTab 0.5s');
    $('#settingBackground').show();
    $('#settingBackground').css('opacity', '1');
}

var config = JSON.parse(localStorage.getItem('XJCConfig').replaceAll('    ', '').replaceAll('\n', ''));

var defaultConfig = {
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
}

function showsettingsdisplay() {
    $('#stDisplay').show();
    $('#stDisplay').css('animation', 'openSet 0.5s');
    $('#stMessage').hide();
    $('#stSave').hide();
    $('#stStorage').hide();
}

function showsettingsmessage() {
    $('#stMessage').show();
    $('#stMessage').css('animation', 'openSet 0.5s');
    $('#stDisplay').hide();
    $('#stSave').hide();
    $('#stStorage').hide();
}

function showsettingssave() {
    $('#stSave').show();
    $('#stSave').css('animation', 'openSet 0.5s');
    $('#stMessage').hide();
    $('#stDisplay').hide();
    $('#stStorage').hide();
}

function showsettingsstorage() {
    $('#stStorage').show();
    $('#stStorage').css('animation', 'openSet 0.5s');
    $('#stMessage').hide();
    $('#stDisplay').hide();
    $('#stSave').hide();
}

function showsettingsall() {
    $('#stStorage').show();
    $('#stStorage').css('animation', 'openSet 0.5s');
    $('#stMessage').show();
    $('#stMessage').css('animation', 'openSet 0.5s');
    $('#stDisplay').show();
    $('#stDisplay').css('animation', 'openSet 0.5s');
    $('#stSave').show();
    $('#stSave').css('animation', 'openSet 0.5s');
    setTimeout(function() {
        $('#stDisplay').css('animation', 'none');
        $('#stMessage').css('animation', 'none');
        $('#stSave').css('animation', 'none');
        $('#stStorage').css('animation', 'none');

    }, 500);
}

$('#cfs').val(config.display.consoleFontSize);
$('#efs').val(config.display.editorFontSize);

$('#lc').val(config.message.lineColor);
$('#mfs').val(config.message.fontSize);

$('#as').val(config.save.autoSave);
$('#ast').val(config.save.autoSaveTime);

$('#ac').val(config.storage.autoClear);
$('#act').val(config.storage.autoClearTime);
$('#actu').val(config.storage.autoClearTimeUnit);

$('#error').css('font-size', config.display.consoleFontSize)
$('.CodeMirror').css('font-size', config.display.editorFontSize);
var MessageLineColor = config.message.lineColor;
var MessageFontSize = config.message.fontSize;
var autoSave = config.save.autoSave;
var autoSaveTime = config.save.autoSaveTime;

function saveSettings() {
    config.display.displayConsole = $('#dc').val();
    config.display.editorFontSize = $('#efs').val();
    config.display.theme = $('#theme').val();
    config.display.consoleFontSize = $('#cfs').val();
    config.message.lineColor = $('#lc').val();
    config.message.fontSize = $('#mfs').val();
    config.save.autoSave = $('#as').val();
    config.save.autoSaveTime = $('#ast').val();
    config.storage.autoClear = $('#ac').val();
    config.storage.autoClearTime = $('#act').val();
    config.storage.autoClearTimeUnit = $('#actu').val();
    if (config.storage.autoClear == 'true') {
        message('Function: Auto Clear Storage is not available yet.', 'tab', 2000);
        config.storage.autoClear = 'false';
        localStorage.setItem('XJCConfig', JSON.stringify(config));
        setTimeout(function() {
            closeSettingsTab();
            setTimeout(function() { location.reload() }, 1000);
        }, 2000)
    } else {
        localStorage.setItem('XJCConfig', JSON.stringify(config));
        closeSettingsTab();
        setTimeout(function() { location.reload() }, 500);
    }
}

function clearStorage() {
    localStorage.clear();
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
    location.reload();
}

function resetSettings() {
    download('XJCConfig.json', JSON.stringify(defaultConfig));
    localStorage.removeItem('XJCConfig');
    download(localStorage.getItem('XJCfilename'), editor.getValue());
    window.location.replace('../setup.html');
}