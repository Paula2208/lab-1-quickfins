export const formatBirthday = (bd_input:string) => {
    const bd = new Date(bd_input)
    return `${bd.getDate()}/${bd.getMonth()}/${bd.getFullYear()}`
}