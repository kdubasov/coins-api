export const getGraphDate = milsec => {
    const date = new Date(milsec);
    const formatedDateDays = `
        ${(date.getDay() + 1)<10?('0' + (date.getDay() + 1)):(date.getDay() + 1)}-${(date.getMonth() + 1)<10?('0' + (date.getMonth() + 1)):(date.getMonth() + 1)}-${date.getFullYear()}`;

    const formatedDateTime = `${date.getHours()<10?('0' + date.getHours()):date.getHours()}:${date.getMinutes()<10?('0' + date.getMinutes()):date.getMinutes()}`;
    return formatedDateTime + ' ' + formatedDateDays
}