import React, { Component } from 'react'

export default class Tasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [], // ✅ state to hold tasks
            taskInput: '',
            selectValue: 'Low'    
        };
    }

    handleInputChange = (e) => {
        this.setState({ taskInput: e.target.value });
    }

    handleSelectValue = (e) => {
        this.setState({ selectValue: e.target.value });
    }

    handleAddTask = (e) => {
        e.preventDefault(); // prevent form submission
        const { taskInput, tasks } = this.state;
        if ( taskInput.trim() !== ''){
            this.setState({ 
                tasks: [...tasks, taskInput], 
                taskInput: '' // clear input field
                }
            )
        }
    }
    
    deleteTask = (index) => {
        const { taskInput, tasks } = this.state;
        const updatedTasks = tasks.filter((element,i) => i !== index); //create new array to delete and check condition if 2 indexes match
        this.setState({
            tasks: updatedTasks,
            taskInput: ''
        })
    }

    render() {
        const { tasks, taskInput, selectValue } = this.state;
        console.log(this.state);
    return (
        <div>
        <div className="card mb-4">
            <div className="card-body">
                <h5>Add New Task</h5>
                <form id="myForm">
                    <div className="mb-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Enter a task..." 
                            value={taskInput}
                            onChange ={this.handleInputChange}
                            required />
                    </div>
                    <div className="mb-2">
                        <select className="form-select" 
                        id="priority" 
                        value={this.selectValue}
                        onChange={this.handleSelectValue}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary add-button" 
                        onClick={this.handleAddTask}>Add Task</button>
                </form>
            </div>
        </div>

       
        <div className="card">
            <div className="card-body">
                <h5>Task List</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="taskTable">                  
                        {   
                            tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{task}</td>
                                    <td>{this.state.selectValue}</td>
                                    <td>Pending</td>
                                    <td>
                                    <button onClick={() => this.deleteTask(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))               
                        }  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
  }
}

