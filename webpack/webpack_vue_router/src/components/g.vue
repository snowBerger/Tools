<template>
  <div>
    <h1> i am a conponent {{c}} async</h1>
    <h5>message from h.vue {{message}}</h5>	
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return { c: 'G' }
  },
  created() {
  	console.log(this.$route.query)
  },
  ready() {

  },
  route: {
  	waitForData: true,
  	data() {
  		return {
  			message: 'bonjour'
  		}
	 },
  	activate (transition) {
  		console.log(this.$route.params)
  		console.log(transition);
  		console.log('i am been activead!!!! merci beacoup! cgggggggggggggggggggg');
  		transition.abrot();
  	},
  	deactivate (transition) {
  		console.log(transition);
  		console.log('i am been deactivated!!! gggggggggggggg');
  		transition.next()
  	}
  }
}
</script>