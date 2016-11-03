<style scoped>
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
</style>

<template>
  <div class="container">
    <h2 class="red">{{msg}}</h2>
    <h3 @click="getComponent">{{clickme}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是组件一',
      clickme: '点击我与组件二通信',
      messageA: 'I am a message from ComponentA!'
    }
  },
  ready() {
    // this.msg = 'hell world';
    console.log('changeComponentA loaded!');
  },
  events: {
    changeComponentB() {
     this.messageA = 'change!!!!!'
    }
  },
  methods: {
    getComponent () {
      //this.$dispatch('B')
      // this.$routet.go({})
    }
  },
  speack() {
    alert('hello');
    var me = this;
    setTimeout(function(){
      me.msg = 'hl';
    }, 300)
    this.msg = 'hell world';
  }
}
</script>