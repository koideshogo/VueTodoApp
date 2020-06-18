var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
    bpi: null
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      console.log(response)
    })
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