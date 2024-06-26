import { Todo } from "../types/todo";

interface TodoResultProps {
	todos: Todo[];
}

const TodoResult = ({ todos }: TodoResultProps) => {
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<div>
			{todos.length > 0 ? (
				<>
					<p>{(completedTodos.length / todos.length) * 100}% 완료</p>
				</>
			) : (
				<p>아직 할 일 없음</p>
			)}
		</div>
	);
};

export default TodoResult;
