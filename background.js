chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create("window.html", {
        'bounds': {
            'width': 360,
            'height': 540
        },

        'minWidth': 360,
        'minHeight': 580,
        'maxWidth': 480,
        'maxHeight': 640,
    });
});
