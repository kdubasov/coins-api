export const getLang = () => {
    const lang = window?.localStorage.getItem('lang');

    if (!lang || (lang !== 'eng' && lang !== 'rus')) {
        window?.localStorage.setItem('lang','eng');
        return 'eng';
    }

    //если в localstorage значения нет то выводим eng
    return lang;
}
