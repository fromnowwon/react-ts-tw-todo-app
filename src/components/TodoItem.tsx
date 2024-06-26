import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
	todo: Todo;
	setCompletedTodo: (id: number, completed: boolean) => void;
	deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, setCompletedTodo, deleteTodo }: TodoItemProps) => {
	const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompletedTodo(todo.id, e.target.checked);
	};

	const handleDelete = () => {
		deleteTodo(todo.id);
	};

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={handleComplete}
				/>
				<span>{todo.title}</span>
				<button onClick={handleDelete}>
					<Trash2 />
				</button>
			</label>
		</div>
	);
};

export default TodoItem;
