var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      // alert();
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem = '';
    }
  }
})