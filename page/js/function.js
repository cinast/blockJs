/*
  欢迎来到 function.js
  这里是存放底层函数库的地方，任何人只能对他人的函数进行修订，如果要删除他人的函数，需要 blockjs 全体开发人员全体表决。
  第一个函数为http_get()，以后的函数都要按这个写，修订时必须记录修订日期、谁修订的和修订了什么
  修订完后记得在开发者一栏加上名字，非必要(如参数调整，用法调整)不修订函数说明和使用方法
*/

/*
   参数类型标记说明:
    str : 字符串
    int : 整数
    float : 浮点数
    object : javascript对象
    method : 特殊的stirng,只能是get,post,patch,trade,put其中的一种
    url : 特殊的string,只能是网页
    array : 特殊的object,只能是数组
    json : 特殊的object,只能是JSON格式的数据
    any : 任意数据
    null : 无参
    'x' : 参数内只能是x,其中x可替换
   参数逻辑符:
    a||b 表示参数可以为a或者b
    !a 表示参数类型除了是a都可以
    a 表示参数类型只能是a
*/

/*
  http_get(method['GET'],url[url])
  开发者:Orangesoft
  函数说明:发送get请求并返回
  返回说明:get请求后的返回值
  使用方法:填写参数('GET',要请求的网址)
  修订历史记录:null
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

/*
  http_post(method['POST'],url[url],text[str])
  开发者:Orangesoft
  函数说明:发送post请求并返回
  返回说明:post请求后的返回值
  使用方法:填写参数('POST',要请求的网址)
  修订历史记录:null
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

function include(a, b) {
    return a.search(b) != -1;
}