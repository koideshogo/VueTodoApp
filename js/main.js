var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      // console.log(response.data.bpi)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error);
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  },
  methods: {
    addItem: function(event) {
      // alert();
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
      // alert(index);
    }
  }
})