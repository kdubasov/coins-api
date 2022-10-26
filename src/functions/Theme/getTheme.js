export const getTheme = (textReturn) => {
    //если textReturn === true то выводим не булево значение а light или dark
    const theme = window?.localStorage.getItem('theme');
    return textReturn?theme:theme==='light'
}