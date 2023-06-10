const { createApp } = Vue

createApp({
  data() {
    return {
        tasks : [ {
            text:'Fare colazione',
            done: false,
            edit:false 
        },
        {
            text:'Uscire a corrrere',
            done: false,
            edit:false 
        },
        {
            text:'Doccia',
            done: false,
            edit:false 
        },
        {
            text:'Studiare',
            done: false,
            edit:false 
        },
        {
            text:'Leggere',
            done: false,
            edit:false 
        },
        {
            text:'Gioca',
            done: false,
            edit:false 
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
    },
    editTask(index){
        this.tasks[index].edit=!this.tasks[index].edit;
    }
}
}).mount('#app')