<template>
<router-view class="view" transition="test" transition-mode="out-in" keep-alive>
</router-view>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  // components: {
  //   CompA,
  //   CompB,
  //   Counter
  // },
  methods: {
    say: function() {
      alert('hello components!!!!');
    }
  }
  // events: {
  //   say: function() {
  //     this.$dispach('go');
  //   }
  // }
  // events: {
  //  A: function() {
  //    this.$broadcast('changeComponentB');
  //  },
  //  B: function() {
  //    this.$broadcast('changeComponentA');
  //  }
  // }
}
</script>

<style lang="stylus">
</style>