export const getLang = () => {
    const lang = window?.localStorage.getItem('lang');

    //ставим язык браузера
    const langNew = () => {
        const langInner = window.navigator.language;
        if (langInner) {
            if(langInner.includes("ru")){
                return "rus";
            }else {
                return "eng";
            }
        }else {
            return false;
        }
    }

    //ставим язык
    if (!lang || (lang !== 'eng' && lang !== 'rus')) {
        window?.localStorage.setItem('lang',langNew()?langNew():'eng');
        return 'eng';
    }

    //если в localstorage значения нет то выводим eng
    return lang;
}
