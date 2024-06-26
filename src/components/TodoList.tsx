import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	setCompletedTodo: (id: number, completed: boolean) => void;
}

const TodoList = ({ todos, setCompletedTodo }: TodoListProps) => {
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem todo={todo} setCompletedTodo={setCompletedTodo} />
			))}
		</div>
	);
};

export default TodoList;
