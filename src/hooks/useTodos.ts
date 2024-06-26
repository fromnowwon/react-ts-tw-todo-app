import { useState } from "react";
import { Todo } from "../types/todo";

const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	return {
		todos,
	};
};

export default useTodos;
