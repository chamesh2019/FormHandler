export const usernameValidator = (username) => {
    return username.length > 3;
}

export const dateValidator = (date) => {
    let currentDate = new Date();
    let selectedDate = new Date(date);
    let ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
    return ageDifference > 18 || (ageDifference === 18 && currentDate.getMonth() >= selectedDate.getMonth() && currentDate.getDate() >= selectedDate.getDate());
}