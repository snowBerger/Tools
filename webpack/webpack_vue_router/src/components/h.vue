<template>
  <div>
    <h1> i am a conponent {{c}} async</h1>
    <p>{{message}}</p>
    <a v-link="{path: 'g', params:{u: 123456}}"> click me to vue F/G  </a>
    <a @click="gotog"> click me to go vue f/g</a>
  </div>
</template>

<script>
export default {
  data () {
    return { c: 'H' }
  },
  methods: {
  	gotog() {
  		this.$router.go({
  			path: 'g',
  			params: {
  				u: '456'
  			},
  			query: {
  				q: '789'
  			}
  		})
  	}
  },
  route: {
	 data: function (transition) {
	 	//延迟执行数据渲染
	     setTimeout(() =>  {
	      	transition.next({
	    		message : 'hahahhahahhahaah'
	    	});
	     }, 1000);
	  },
  	//组件在加完数据之后定义路由跳转
  	waitForData: true,
  	//该组件激活时事件
  	activate (transition) {
  		console.log(transition.to);
  		console.log(transition.from);
  		console.log('i am been activead!!!! merci beacoup hhhhhhhhhhhhhhhhhhhh!');
  		transition.next()
  	},
  	//组件注销或者冻结时的触发事件。
  	deactivate (transition) {
  		console.log(transition);
  		console.log('i am been deactivated!!! hhhhhhhhhhhhhhhhh');
  		transition.next()
  	}
  }
}
</script>