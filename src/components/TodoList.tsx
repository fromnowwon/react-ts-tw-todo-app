import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	setCompletedTodo: (id: number, completed: boolean) => void;
	deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, setCompletedTodo, deleteTodo }: TodoListProps) => {
	const todosSorted = todos.sort((a, b) => {
		if (a.completed === b.completed) {
			return b.id - a.id; // 내림차순
		}
		return a.completed ? 1 : -1; // 완료된 할 일 뒤로 보내기
	});

	return (
		<div>
			{todosSorted.map((todo) => (
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
