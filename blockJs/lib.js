/**
 * get a random between max and min
 * @param {number} max 
 * @param {number} min 
 * @returns {number}
 */
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * get 6-12-6 formated uuid string
 * @returns {string}
 */
function id() {
    const table = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let r = ""
    for (let i = 0; i < 6; i++) {
        r+=table[random(0,58)]
    }
    r+="-"
    for (let i = 0; i < 12; i++) {
        r+=table[random(0,58)]
    }
    r+="-"
    for (let i = 0; i < 6; i++) {
        r+=table[random(0,58)]
    }
    return r
}

/**
 * return an error and warn console
 * @param {string} massage
 */
function throwError(massage){
    console.warn(massage)
    return new Error(massage)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports =  {random,id,throwError,sleep}