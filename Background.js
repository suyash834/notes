$('#sketch').click(function(){
    chrome.tabs.executeScript(null, {file:"lib/jquery-1.9.0.min.js"},
            function() {
            chrome.tabs.insertCSS(null, {file: "css/injectStyle.css"});
            chrome.tabs.executeScript(null, {file:"js/HandDrawing.js"});
            });
            });
            $('.menuItem').on('mousedown', function(){
    $(this).css('background-color', '#3399FF');
            });
            $('.menuItem').on('mouseup', function(){
    $(this).css('background-color', '#F0F0F0');
            });