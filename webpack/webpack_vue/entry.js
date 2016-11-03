require("./style.css");
/*entry.js*/
document.getElementById("app").innerHTML = "这是我的第一个打包实例程序！！！";
//添加first.js
require("./first.js");

var Vue = require("vue");

new Vue({
	el: 'body',
	data:{
		message: "hello vue.js!"
	}
});