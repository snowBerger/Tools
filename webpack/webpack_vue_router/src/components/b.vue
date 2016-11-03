<style scoped>
.container {
  border: 1px solid #f00;
}
h2 {
  color: #393;
}
</style>

<template>
  <div class="container">
     <h2 class="red">{{msg}}</h2>
     <h3 @click="getComponent">{{clickme}}</h3>
     <a v-link="{ path: '/C' }">go to c</a>
     <a v-link="{ path: '/D' }">go to d</a>
  </div>
</template>

<script>
// var App = require('../modules/a.js');
export default {
	data() {
		//console.log('i will send ajax to html constractor')
		return {
			msg: '我是组件二',
			clickme: '点击我与组件一通信！',
			messageB: 'I am a message from ComponentB!'
		}
	},
	created: function() {
		console.log('createddd..............');
		this.clickme = '点击我与组件一通信...............................！';
		this.msg = '';
		console.log(this.$route.params)
		// setTimeout(()=> {
		// 	this.msg = 'bonjour la monde je suis la voue de mon coeur';
		// 	console.log(this.msg);
		// }, 2000);
		
		 // res.notice.get_list(null, function(){
		 // 	self.noticeList = notices;
		 // });
	},
	ready() {
	    console.log('changeComponentB loaded!');
	    this.messageB = 'change!!!!';
	    fetch('/src/data/data.json').then(res => {
				// console.log(res.text());
				this.msg = '10000000000000';
				// console.log(res.body)
				// debugger;
				// var m = Promise.resolve(res)
				// console.log(m)
				// if (res.ok) {
				//     res.json().then(function(data) {
				//       console.log(data.entries);
				//     });
				//   } else {
				//     console.log("Looks like the response wasn't perfect, got status", res.status);
				//   }
			})
	},
	events: {
		changeComponentA() {
			this.messageB = 'changed!!!!';
			console.log(this.messageB);
			//内部路由对象
			console.log(this.$route);
			//调用父组件的方法 可以使用方法
			console.log(this.$parent);
			//子组件的索引
			console.log(this.$refs);
			//Vue 实例观察的数据对象
			console.log(this.$data);
			var me = this;
			fetch('/src/data/data.json').then(res => {
				// console.log(res.text());
				this.msg = '10000000000000';
				// console.log(res.body)
				// debugger;
				// var m = Promise.resolve(res)
				// console.log(m)
				// if (res.ok) {
				//     res.json().then(function(data) {
				//       console.log(data.entries);
				//     });
				//   } else {
				//     console.log("Looks like the response wasn't perfect, got status", res.status);
				//   }
			})
		}
	},
	methods: {
		getComponent () {
			this.$dispatch('A');
		}
	}
}

</script>