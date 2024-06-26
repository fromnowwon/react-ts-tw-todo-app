import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	setCompletedTodo: (id: number, completed: boolean) => void;
	deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, setCompletedTodo, deleteTodo }: TodoListProps) => {
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem
					todo={todo}
					setCompletedTodo={setCompletedTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
