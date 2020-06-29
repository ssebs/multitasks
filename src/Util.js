// Util.js - misc utils

export const loadData = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem("data")) {
            resolve(JSON.parse(localStorage.getItem("data")))
        } else {
            reject("No data")
        }
    })
}

export const saveData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(localStorage.setItem("data", JSON.stringify(data)))
        } catch (err) {
            reject(err)
        }
    })

}

export const wipeData = () => {
    return new Promise((resolve) => {
        localStorage.clear()
        resolve("Done")
    })

}

export const capFirst = (inputStr) => {
    return inputStr.charAt(0).toUpperCase() + inputStr.slice(1)
}