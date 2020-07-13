import React, { Component } from 'react'

class TodosItem extends Component {
    getParentDivStyle = () => {
        return {
            textDecoration: this.props.mytodos.completed ?
                'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.mytodos
        return (
            <div className='main-todos-div' style={this.getParentDivStyle()}>
                <div className='todo-div'>
                    <input className='checkbox-round' type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    <span>{title}</span>
                </div>
                <div className='btn-div'>
                    <button onClick={this.props.deleteTodo.bind(this, id)}><i className='fas fa-trash'></i></button>
                </div>
            </div>
        )
    }
}

export default TodosItem
