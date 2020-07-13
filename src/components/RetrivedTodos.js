import React from 'react'
import TodosItem from './TodosItem'

class RetrivedTodos extends React.Component {
    render() {
        return this.props.todos.map((mytodos) => (
            <TodosItem mytodos={mytodos} key={mytodos.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
        ))
    }
}

export default RetrivedTodos
