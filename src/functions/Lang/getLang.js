export const getLang = () => {
    const lang = window.localStorage.getItem('lang');

    if (!lang) {
        window.localStorage.setItem('lang','eng');
    }
    //если в localstorage значения нет то выводим eng
    return lang?lang:'eng';
}