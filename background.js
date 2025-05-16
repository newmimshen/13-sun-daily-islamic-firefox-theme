chooseSun();
//console.log(document.hidden);
browser.theme.update(sunTheme);
window.addEventListener('blur', () => console.log('window blurred'));