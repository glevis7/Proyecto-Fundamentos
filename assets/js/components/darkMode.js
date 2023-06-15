export function enableDarkMode() {
    const checkDarkMode = document.getElementById('checkitem');

    checkDarkMode.addEventListener('click', () => {
        let main_body = document.body;
        main_body.classList.toggle("dark-mode");
        console.log('me ejecute')
    })
}