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
    ]
    }
  }
}).mount('#app')