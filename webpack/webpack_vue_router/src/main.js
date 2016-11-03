var Vue = require('vue');
// var App = require('./app.vue');
// var C = require('./components/c.vue')
var VueRouter = require('vue-router');
Vue.use(VueRouter);
// var Apps = Vue.extend({

// 	el: 'body',
//   components: {
//     app: App
//   },
//   methods: {
//   	bodyclick: function() {
//   		// this.$dispatch('A')
//   		alert('i am body !!!!')
//   	}
//   },
//   events: {
//   	A: function() {
//   		this.$broadcast('changeComponentB');
//   	},
//   	B: function() {
//   		this.$broadcast('changeComponentA');
//   	}
//   }
// })
var router = new VueRouter();
App = Vue.extend(require('./layout.vue'))
router.map({
   '/A': {
      component: require('./app.vue')  
    },
  	// '/A/:user': {
  	// 	 component: require('./app.vue')	
  	// },
    '/D': {
      component: function (resolve) {
        require(['./components/d.vue'], resolve)
      }
    },
    '/C': {
	    component: function (resolve) {
        require(['./components/c.vue'], resolve)
      }
  	},
    '/F': {
      component: function(resolve){
        require(['./components/f.vue'], resolve)
      },
      subRoutes: {
        '/g': {//F/g?a=xxx&b=xxx
           component: require('./components/g.vue')
        },
        '/h': {
           component: require('./components/h.vue')  
        }
      }
    }
});
router.start(App, '.app')
// new Vue({
//   el: 'body',
//   components: {
//     app: App
//   },
//   methods: {
//   	bodyclick: function() {
//   		// this.$dispatch('A')
//   		alert('i am body !!!!')
//   	}
//   },
//   events: {
//   	A: function() {
//   		this.$broadcast('changeComponentB');
//   	},
//   	B: function() {
//   		this.$broadcast('changeComponentA');
//   	}
  	
//   }
// })