var app = new Vue({
  el: "#app",
  data: {
    message: "New Task",
    tasks: [],
    id :0 
  },
  methods: {
    addTask(message) {
      this.tasks.push({
        text: message,
        id: this.id +1
      });
      this.id++;
    },
    deleteTask(index) {
      
      this.tasks.splice(index-1, 1);
    },
  },
});
