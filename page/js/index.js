/*
  欢迎来到 index.js
  这里是存放函数库的地方，任何人只能对他人的函数进行修订，如果要删除他人的函数，需要 blockjs 全体开发人员全体表决。
  第一个函数为view()，以后的函数都要按这个写，修订时必须记录修订日期、谁修订的和修订了什么
  修订完后记得在开发者一栏加上名字，非必要(如参数调整，用法调整)不修订函数说明和使用方法
*/

/*
  view()
  开发者:Orangesoft
  函数说明:调用后使网页后端的记录的浏览量+1
  使用方法:直接调用,无需参数
  修订历史记录:null
*/
function view() {
    let http_view = new XMLHttpRequest;
    let url_view = "https://pickfish.repl.co/count";
    http_view.open('GET', url_view);
    http_view.send();
}

/*
  get_view()
  开发者:Orangesoft
  函数说明:调用后可以获得网页浏览量
  返回说明:
  使用方法:直接调用,无需参数
  修订历史记录:null
*/
function get_view() {
    let http_view = new XMLHttpRequest;
    let url_view = "https://pickfish.repl.co/get_count";
    http_view.open('GET', url_view);
    http_view.send();
}