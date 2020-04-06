import React, { Component } from "react";
import css from "./App.module.css";
import ActiveTodo from "./ActiveTodo/ActiveTodo";
import { connect } from "react-redux";
import MyButton from "../../../common/components/MyButton/MyButton";
import {
	toggleOpenTodos,
	addTodo,
	toggleTodoDone,
	deleteTodo,
	openActiveTodo,
	addSubTask,
	doneSubTask,
} from "../../../background/scripts/reducers/todoReducer";
import Todo from "./Todo/Todo";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      subTask: "",
      newTask: "",
			isMinimized: false,
		};

		this.handleToggleTodoDone = this.handleToggleTodoDone.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleOpenActive = this.handleOpenActive.bind(this);
		this.setSubTask = this.setSubTask.bind(this);
		this.setNewTask = this.setNewTask.bind(this);
    this.handleToggleMinimize = this.handleToggleMinimize.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	setSubTask(value) {
		this.setState({
			subTask: value,
		});
	}
	setNewTask(value) {
		this.setState({
			newTask: value,
		});
	}
	handleToggleMinimize() {
		this.setState((prevState, props) => ({
			isMinimized: !prevState.isMinimized,
		}));
	}

  handleAddTodo() {
    if (!this.state.newTask) {
      alert("Enter Task Name")
      return
    }
    this.props.addTodo({
      id: (new Date).getTime(),
      value: this.state.newTask,
      done: false,
      subTasks: [],
    });
    this.setState({newTask: ''});
  }
	handleToggleTodoDone(id, e) {
		e.stopPropagation();
		this.props.toggleTodoDone(id);
	}
	handleDelete(id) {
		this.props.deleteTodo(id);
	}
	handleOpenActive(id) {
		this.props.openActiveTodo(id);
	}

	render() {
		if (!this.props.isTodosOpen) return <div></div>;

		return (
			<div className={css.container}>
				<div className={css.windowTop}>
					<h1 className={css.windowName}>TODO list</h1>
          {this.props.activeTodo &&
            <MyButton
              onClick={() => this.props.openActiveTodo('')}
              name="&larr;"
              isSymbol={true}
            />
          }
					<MyButton
						name="&mdash;"
						onClick={this.handleToggleMinimize}
						isSymbol={true}
					/>
					<MyButton
						name="&#10005;"
						onClick={this.props.toggleOpenTodos}
						isSymbol={true}
					/>
				</div>
				{!this.state.isMinimized && (this.props.activeTodo ? (
					<ActiveTodo
						todo={this.props.todos.find(
							(todo) => todo.id === this.props.activeTodo
						)}
						addSubTask={this.props.addSubTask}
						doneSubTask={this.props.doneSubTask}
						subTask={this.state.subTask}
						setSubTask={this.setSubTask}
					/>
				) : (
					<div>
						<div>
							<h2>Current tasks:</h2>
							<ul className={css.list}>
								{this.props.todos
									.filter((todo) => !todo.done)
									.map((todo) => {
										return (
											<Todo
												key={todo.id}
												todo={todo}
												handleOpenActive={
													this.handleOpenActive
												}
												handleToggleTodoDone={
													this.handleToggleTodoDone
												}
												handleDelete={this.handleDelete}
											/>
										);
									})}
							</ul>
							<h2>Done tasks:</h2>
							<ul className={css.list}>
								{this.props.todos
									.filter((todo) => todo.done)
									.map((todo) => {
										return (
											<Todo
												key={todo.id}
												todo={todo}
												handleOpenActive={
													this.handleOpenActive
												}
												handleToggleTodoDone={
													this.handleToggleTodoDone
												}
												handleDelete={this.handleDelete}
											/>
										);
									})}
							</ul>
              <div>
                  <div className={css.input}>
                      <input type="text" 
                          placeholder="add task"
                          value={this.state.newTask}
                          onChange={e => this.setNewTask(e.target.value)}
                      />
                  </div>
                  <MyButton
                      className={css.addButton}
                      name="add"
                      onClick={this.handleAddTodo}
                  />
              </div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todoReducer.todos,
		activeTodo: state.todoReducer.activeTodo,
		isTodosOpen: state.todoReducer.isTodosOpen,
	};
};

export default connect(mapStateToProps, {
	toggleOpenTodos,
	addTodo,
	toggleTodoDone,
	deleteTodo,
	openActiveTodo,
	addSubTask,
	doneSubTask,
})(App);
