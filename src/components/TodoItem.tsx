import { Todo } from "../types/todo";

interface TodoItemProps {
	todo: Todo;
	setCompletedTodo: (id: number, completed: boolean) => void;
}

const TodoItem = ({ todo, setCompletedTodo }: TodoItemProps) => {
	const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCompletedTodo(todo.id, e.target.checked);
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
			</label>
		</div>
	);
};

export default TodoItem;
