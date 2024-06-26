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
		<div className="flex items-center gap-1">
			<label className="flex items-center gap-2 grow border rounded-md p-2 border-gray-400 bg-white hover:bg-slage-50">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={handleComplete}
					className="scale-125"
				/>
				<span className={todo.completed ? "line-through text-gray-400" : ""}>
					{todo.title}
				</span>
				<button onClick={handleDelete}>
					<Trash2 size={20} className="text-gray-500" />
				</button>
			</label>
		</div>
	);
};

export default TodoItem;
