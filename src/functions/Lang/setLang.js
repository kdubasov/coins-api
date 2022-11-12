export const setLang = value => {
    window?.localStorage.setItem('lang', value);
    window.location.reload();
}