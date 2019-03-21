$(function() {
    function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    }
    toggleFullScreen();
    var attached = ['#intro'];
    $('.btn').click(function() {
        attached.unshift($(this).attr('href'));
        $(attached[1]).removeClass('reveal');
        $(attached[0]).addClass('reveal');
        if (attached.length === 3) {
            attached.pop();
        }
        console.log(attached[0]);
        console.log(attached[1]);
        console.log(attached[2]);
    });
});