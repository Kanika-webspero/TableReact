export const setUser = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export const setAuth = (value) => {
    localStorage.setItem("auth", value)
}

export const getAuth = () => {
    return localStorage.getItem("auth") === 'true' ? true : false
}