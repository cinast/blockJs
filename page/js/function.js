/*
  欢迎来到 function.js
  这里是存放底层函数库的地方，任何人只能对他人的函数进行修订，如果要删除他人的函数，需要 blockjs 全体开发人员全体表决。
  第一个函数为http_get()，以后的函数都要按这个写，修订时必须记录修订日期、谁修订的和修订了什么
  修订完后记得在开发者一栏加上名字，非必要(如参数调整，用法调整)不修订函数说明和使用方法
*/

/*注释请用jsdoc*/

/**
 * easy xhr 
 * @param {"GET"} method
 * @param {string} url
 * @return {string}
 * @by Orangesoft
*/
function http_get(method, url) {
    let http = new XMLHttpRequest;
    http.open(method, url);
    http.send();
    httponreadystatechange = function() {
        if (http.DONE) {
            return http.responseText;
        }
    }
}


/**
 * easy xhr 
 * @param {"POST"} method
 * @param {string} url
 * @returns {string}
 * @by Orangesoft
*/
function http_post(method, url, text) {
    let http = new XMLHttpRequest;
    http.open(method, url);
    http.withCredentials = cookie;
    http.send(text);
    httponreadystatechange = function() {
        if (http.DONE) {
            return http.responseText;
        }
    }
}

/**
 * /
 * @param {*} a 
 * @param {*} b 
 * @returns {*}
 */
function include(a, b) {
    return a?.search(b) != -1;
}