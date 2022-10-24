import React from "react";
import './App.css'
import { observer } from 'mobx-react-lite';
import todo from "./store/todo";

const Todo = observer(() => {
	return (
		<div>
			<button onClick={() => todo.fetchTodos()}>fetch todos</button>
			{todo.todos.map(t =>
				<div className="todo" key={t.id}>
					<input type="checkbox" checked={t.complated} onChange={() => todo.complatedTodo(t.id)} />
					{t.title}
					<button onClick={() => todo.removeTodo(t.id)}>X</button>
				</div>
			)}

		</div>
	)
});

export default Todo;