export const formatBirthday = (bd_input:string) => {
    const bd = new Date(bd_input)
    return `${bd.getDate()}/${bd.getMonth()}/${bd.getFullYear()}`
}

export const calcularEdad = (fecha: string) => {
    const birthday_arr = fecha.split("/");
    const birthday_date = new Date(parseInt(birthday_arr[2]), parseInt(birthday_arr[1]) - 1, parseInt(birthday_arr[0]));
    const ageDifMs = Date.now() - birthday_date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDate = (date: Date) => {
    const month = date.getMonth() >= 10 ? date.getMonth() + 1 : `0${date.getMonth() +1}`;
    return `${date.getFullYear()}-${month}-${date.getDate()} 00:00:00`;
}