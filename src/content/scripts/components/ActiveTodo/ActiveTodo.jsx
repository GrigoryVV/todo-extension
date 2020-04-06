import React from 'react';
import css from './ActiveTodo.module.css';
import MyButton from '../../../../common/components/MyButton/MyButton';

const ActiveTodo = ({
    todo,
    addSubTask,
    doneSubTask,
    subTask,
    setSubTask
}) => {

    const handleAddSubTask = (todoId) => {
        if (!subTask) {
            alert('Please enter a subtask');
            return
        }
        addSubTask({subTask, todoId});
        setSubTask('');
    }
    const handleDoneSubTask = (todoId, subTask) => {
        doneSubTask({subTask, todoId});
    }

    return (
        <div>
            <h2>{todo.value}</h2>
            {
                todo.subTasks.map((task, id) => (
                    <div key={task + id}
                        className={css.subTaskContainer}
                    >
                        <div className={css.subTask}>{task}</div>
                        <MyButton
                            isSymbol={true}
                            name="&#10008;"
                            onClick={() => handleDoneSubTask(todo.id, task)}
                        />
                    </div>
                ))
            }
            <div>
                <div className={css.input}>
                    <input type="text" 
                        placeholder="add subtask"
                        value={subTask}
                        onChange={e => setSubTask(e.target.value)}
                    />
                </div>
                <MyButton
                    className={css.addButton}
                    name="add"
                    onClick={() => handleAddSubTask(todo.id)}
                />
            </div>
        </div>
    );
}

export default ActiveTodo;