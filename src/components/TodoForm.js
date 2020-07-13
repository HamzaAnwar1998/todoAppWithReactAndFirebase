import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className='todo-form'>
                <form action="" onSubmit={this.handleSubmit} className='form' autoComplete="off">
                    <input className='form-input' id='todo' type="text" placeholder='ADD TODOS...' onChange={this.handleChange} required value={this.state.title} />
                    <button type="submit" className='form-btn'>
                        <i className='fas fa-plus'></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm
