<template lang="jade">
div
  img(class="logo", src="./assets/logo.png")
  h1 {{msg}}
  comp-a
  comp-b
  counter
 
</template>
<script>
import CompA from './components/a.vue'
import CompB from './components/b.vue'
import Counter from './components/counter.vue'
// console.log(CompA);
// CompA.ready({
//       msg: '我是组件一555555',
//       clickme: '点击我与组件二通信',
//       messageA: 'I am a message from ComponentA!'
// });
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  },
  methods: {
    say: function() {
      //子组件对象
      console.log(this.$children)
      alert('hello components!!!!')
    }
  },
  // events: {
  //   say: function() {
  //     this.$dispach('go');
  //   }
  // }
  events: {
   A: function() {
     this.$broadcast('changeComponentB');
   },
   B: function() {
     this.$broadcast('changeComponentA');
   }
  }
}
</script>

<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color
.logo
  width 40px
  height 40px
</style>