/*
  欢迎来到 index.js
  这里是存放上层函数库的地方，任何人只能对他人的函数进行修订，如果要删除他人的函数，需要 blockjs 全体开发人员全体表决。
  第一个函数为view()，以后的函数都要按这个写，修订时必须记录修订日期、谁修订的和修订了什么
  修订完后记得在开发者一栏加上名字，非必要(如参数调整，用法调整)不修订函数说明和使用方法
*/

// -- CONFIG -- 
const server = "https://pickfish.repl.co"
// -- CONFIG -- 

/** 
 * @by CoderOrangesoft
 * @returns {undefined}
 */
function view() {
    let http_view = new XMLHttpRequest;
    let url_view = server + "/count";
    http_view.open('GET', url_view);
    http_view.send();
}

/**
 * @by CoderOrangesoft
 * @returns {JSON}
 */
function get_view() {
    let http_view = new XMLHttpRequest;
    let url_view = server + "/get_count";
    http_view.open('GET', url_view);
    http_view.send();
    http_view.onreadystatechange = function () {
        if (http_view.status == 200 && http_view.DONE) {
            return http_view.responseText
        }
    }
}

/**
 * @by CoderOrangesoft
 * @param {int} id
 * @returns {JSON}
 */
function get_user(id) {
    return http_get('GET', server + "/user/info?id=" + id)
}

/**
 * @by CoderOrangesoft
 * @returns {JSON}
 */
function get_myself() {
    return http_get('GET', server + "/user/myself")
}

/**
 * @by CoderOrangesoft
 * @param {int} page
 * @returns {JSON}
 */
function get_forum(page) {
    return http_get('GET', server + "/forum/get?page=" + page)
}

/**
 * @by CoderOrangesoft
 * @param {string} title 
 * @param {string} content
 * @returns {JSON}
 */
function send_forum(title, content) {
    if (include(title, '-') || include(title, '\'') || include(title, '"')) {
        return {
            "success": false,
            "message": "标题只能含有中文,数字或英文"
        }
    } else if (include(content, '<') || include(content, '>')) {
        return {
            "success": false,
            "massage": "输入的内容有潜在风险,请删除大于号或小于号等特殊字符后重试"
        }
    }
    return http_post('POST', server + "/forum/send", title + "-" + content)
}

/**
 * @by CoderOrangesoft
 * @param {string} content
 * @returns {JSON}
 */
function reply_forum(id, content) {
    if (include(content, '<') || include(content, '>') || include(content, "-")) {
        return {
            "success": false,
            "massage": "输入的内容有潜在风险,请删除大于号、小于号横杠等特殊字符后重试"
        }
    }
    return http_post('POST', server + "/forum/reply", id + "-" + content)
}

/**
 * @by CoderOrangesoft
 * @param {int} id
 * @param {int} page 
 * @returns {JSON}
 */
function get_reply(id, page) {
    return http_get('GET', server + "/forum/reply/get?id=" + id + "&page=" + page)
}

/**
 * @by CoderOrangesoft
 * @param {string} text
 * @returns {JSON}
 */
function change_username(text) {
    if (include(text, '<') || include(text, '>') || include(text, "-")) {
        return {
            "success": false,
            "massage": "输入的内容有潜在风险,请删除大于号、小于号横杠等特殊字符后重试"
        }
    } else if (text.length() > 15) {
        return {
            "success": false,
            "message": "输入的内容有潜在在风险,请降低字数至15字及以内"
        }
    }
    return http_post('POST', server + "/user/change/username", text)
}

/**
 * @by CoderOrangesoft
 * @param {string} text
 * @returns {JSON}
 */
function change_avatar(text) {
    if (include(text, '<') || include(text, '>') || include(text, "-")) {
        return {
            "success": false,
            "massage": "输入的内容有潜在风险,请删除大于号、小于号横杠等特殊字符后重试"
        }
    }
    return http_post('POST', server + "/user/change/avatar", text)
}

/**
 * @by CoderOrangesoft
 * @param {string} text
 * @returns {JSON}
 */
function change_des(text) {
    if (include(text, '<') || include(text, '>') || include(text, "-")) {
        return {
            "success": false,
            "massage": "输入的内容有潜在风险,请删除大于号、小于号横杠等特殊字符后重试"
        }
    }
    return http_post('POST', server + "/user/change/des", text)
}
