import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const savedTodos: Todo[] = JSON.parse(
			localStorage.getItem("todos") || "[]"
		);
		return savedTodos.length > 0 ? savedTodos : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (title: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{
				id: Date.now(),
				title,
				completed: false,
			},
		]);
	};

	const setCompletedTodo = (id: number, completed: boolean) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const deleteAllCompletedTodos = () => {
		setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
	};

	return {
		todos,
		addTodo,
		setCompletedTodo,
		deleteTodo,
		deleteAllCompletedTodos,
	};
};

export default useTodos;
