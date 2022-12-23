var todos = [{
        text: 'Learn HTML, CSS and Javascript',
        done: true
    },
    {
        text: 'Learn the basics of Vue JS',
        done: false
    }
];
const todosApp = {
    data() {
        return {
            todos: [],
            //TODOS=[] MAKES TODOS LIST EMPTY
            //WHEN WEBPAGE LOADS AND NO ELEMENT
            //IS ADDED.
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                //CHECKING IF TEXT IS NULL
                //IF YES THEN ADD FUNCTION BUTTON
                //SHOULD NOT WORK.
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                        // creating a new object with done
                        //property set to false.
                };
                localStorage.setItem("todos", JSON.stringify(this.todos));
                //sending list of todos in form of string
                //as that can only be accessed.
            } else {
                alert("TO-DO TEXT IS REQUIRED.");
            }
        }
    },
    // beforeCreate() {
    //     // console.log('BEFORE CREATE');
    //     console.log(this.newTodo);
    // },
    created() {
        // console.log('CREATED');
        // console.log(this.newTodo);
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
        //above line to get items stored in local storage of browser
        //which was saved by the user input. We can access it in json (string) format.
        //hence we wrote above statement.
    },
    updated() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
        //replace old list with new list after
        //changes are made or after replacement.
        //when clear all button is pressed then 
        //no item should be present on screen.
        console.log('updated');
        //THIS IS UPDATED FOR EACH WORD THE USER
        //TYPES IN.
    }
    // beforeUpdate() {
    //     console.log('BEFORE UPDATE');
    // }
}
Vue.createApp(todosApp).mount('#app');