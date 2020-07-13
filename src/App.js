import React from 'react';
import Header from './components/Header'
import RetrivedTodos from './components/RetrivedTodos'
import TodoForm from './components/TodoForm'
import fire from './fire'

class App extends React.Component {
  state = {
    todos: [
      // { id: 1, title: 'get haircut', completed: false },
      // { id: 2, title: 'learn react', completed: false },
      // { id: 3, title: 'learn redux', completed: false }
    ]
  }

  componentDidMount() {
    // adding toods
    const previousTodos = this.state.todos;
    fire.database().ref('todos').on('child_added', snap => {
      previousTodos.push({
        id: snap.key,
        title: snap.val().title,
        completed: false
      })
      this.setState({
        todos: previousTodos
      })
    })
    // deleteing todos
    fire.database().ref('todos').on('child_removed', snap => {
      for (var i = 0; i < previousTodos.length; i++) {
        if (previousTodos[i].id === snap.key) {
          previousTodos.splice(i, 1);
        }
      }
      this.setState({
        todos: previousTodos
      })
    })
  }

  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map((newTodos) => {
        if (newTodos.id === id) {
          newTodos.completed = !newTodos.completed
        }
        return newTodos
      })
    })
  }
  deleteTodo = (id) => {
    // console.log(id);
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter((newTodo) => {
    //       return newTodo.id !== id
    //     })
    //   ]
    // })
    fire.database().ref('todos').child(id).remove();
  }
  addTodo = (title) => {
    // const newTodo = {
    //   id: Math.random(),
    //   title,
    //   completed: false
    // }
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // })


    // firebase
    fire.database().ref('todos').push().set({ title: title })

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className='todo-box'>
          <RetrivedTodos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
