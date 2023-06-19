var app = new Vue({
  el: "#app",
  data() { 
    return {
        counter: 0
    }
  },
  methods: {
    substract: function(){
        this.counter--
    }
  }
}) 
