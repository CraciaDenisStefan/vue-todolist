const { createApp } = Vue

createApp({
  data() {
    return {
        tasks : [ {
            text:'Fare colazione',
            done: false 
        },
        {
            text:'Uscire a corrrere',
            done: false 
        },
        {
            text:'Doccia',
            done: false 
        },
        {
            text:'Studiare',
            done: false 
        },
        {
            text:'Leggere',
            done: false 
        },
        {
            text:'Gioca',
            done: false 
        },
    ],
       newTask:'',
    }
  },
  methods: {
    statusDone(index){
        this.tasks[index].done=!this.tasks[index].done;
    },
    deleteTask(index){
        this.tasks.splice(index, 1)
    },
    addTask(){
        let newTaskObj={
            text :this.newTask,
            done : false,
        }
        if (newTaskObj.text.length > 0 ) {
            this.tasks.push(newTaskObj)
        }
        this.newTask=''
    }
}
}).mount('#app')