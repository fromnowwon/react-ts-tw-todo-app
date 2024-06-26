import { useState } from "react";
import { Todo } from "../types/todo";

const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (title: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{
				id: prevTodos.length + 1,
				title,
				completed: false,
			},
		]);
	};

	return {
		todos,
		addTodo,
	};
};

export default useTodos;
