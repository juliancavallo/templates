(function () {
    $('#selid').select2();

    loadColorMode();

    document.querySelector("#colorModeSelector")
        .addEventListener("click", (e) => {
            
            let newColorMode = e.target.checked ? 'dark-mode' : 'light-mode';

            setColorMode(newColorMode);
        });

})();

function setColorMode(colorMode) {
    localStorage.setItem('colorMode', colorMode);
    document.body.className = colorMode;
}

function loadColorMode() {
    const localMode = localStorage.getItem('colorMode');
    
    if (localMode){
        setColorMode(localMode);
        document.querySelector("#colorModeSelector")
    }
    else
        setColorMode("light-mode");


}