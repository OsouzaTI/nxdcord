const MONTH = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

function hoursFormat(date = new Date()) {
    return `${date.getHours()}:${date.getMinutes()}`;
}

function dayMonthYear(date = new Date()) {
    return `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getYear()}`;
}

function fullDate(date = new Date()) {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getYear()} ${hoursFormat(date)}`;
}

export {
    hoursFormat,
    dayMonthYear,
    fullDate
}