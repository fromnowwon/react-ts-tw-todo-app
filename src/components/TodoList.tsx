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
		<>
			<div className="space-y-2 py-4">
				{todosSorted.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						setCompletedTodo={setCompletedTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</div>
			{todos.length === 0 && (
				<p className="text-center text-gray-500">아직 할 일 없음...</p>
			)}
		</>
	);
};

export default TodoList;
