export const getTheme = () => {
    const theme = window?.localStorage.getItem('theme');
    return theme==='light'
}