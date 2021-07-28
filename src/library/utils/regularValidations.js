export const validateEmptyFields = (object) => {
    return Object.values(object).some(attributes => !attributes)
};

export const validatePasswordLength = (password) => {
    return password.length <= 3
}
