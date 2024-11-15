/// blob.js
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href !== 'https://github.com/JarzaCode/uBlobeBM/raw/refs/heads/main/main.html') {
        var script = document.createElement('script');
        script.src = 'https://blobby-boi.github.io/uBlobeBM/main.js';
        document.body.appendChild(script);
    }
});
