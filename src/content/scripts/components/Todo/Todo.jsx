import React from "react";
import css from "./Todo.module.css";
import MyButton from "../../../../common/components/MyButton/MyButton";

const Todo = ({
	todo,
	handleOpenActive,
	handleToggleTodoDone,
	handleDelete,
}) => {
	if (todo.done) {
		return (
			<li className={css.listItem}>
				<div className={css.taskName + " " + css.doneTask}>
					{todo.value}
				</div>
				<div className={css.buttonsGroup}>
					<MyButton
						isSymbol={true}
						onClick={(e) => handleToggleTodoDone(todo.id, e)}
						name="&#8635;"
					/>
					<MyButton
						isSymbol={true}
						onClick={() => handleDelete(todo.id)}
						name="&#10008;"
					/>
				</div>
			</li>
		);
	}
	return (
		<li
			className={css.listItem + " " + css.activeTask}
			onClick={(e) => handleOpenActive(todo.id)}
		>
			<div className={css.taskName}>{todo.value}</div>
			<MyButton
				isSymbol={true}
				onClick={(e) => handleToggleTodoDone(todo.id, e)}
				name="&#10004;"
			/>
			
		</li>
	);
};

export default Todo;
