import { Todo } from "../types/todo";

interface TodoListProps {
	todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
	return (
		<div>
			{todos.map((todo) => (
				<div>
					<h2>{todo.title}</h2>
				</div>
			))}
		</div>
	);
};

export default TodoList;
