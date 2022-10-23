export const setTheme = () => {
    const theme = window.localStorage.getItem('theme');
    if (theme === 'dark') {
        window?.localStorage.setItem('theme', 'light');
    }else {
        window?.localStorage.setItem('theme', 'dark');
    }
    window.location.reload();
}