import { makeAutoObservable } from 'mobx';


class Todo {
	todos = [
		{ id: 1, title: 'Go to a shop', complated: false },
		{ id: 2, title: 'Watch TV', complated: false },
		{ id: 3, title: 'Walk the dog', complated: false }
	]
	constructor() {
		makeAutoObservable(this)
	}

	appTodo(todo) {
		this.todos.push(todo)
	}

	removeTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}

	complatedTodo(id) {
		this.todos = this.todos.map(todo => todo.id === id ? { ...todo, complated: !todo.complated } : todo)
	}

	fetchTodos() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => [
				...this.todos = [...this.todos, ...json]
			])
	}

}

export default new Todo();