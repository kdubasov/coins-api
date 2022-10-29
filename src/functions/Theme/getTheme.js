export const getTheme = (textReturn) => {
    //если textReturn === true то выводим не булево значение а light или dark
    const theme = window.localStorage.getItem('theme');
    // console.log(textReturn?theme:theme==='light');
    return textReturn?theme:theme==='light'
}